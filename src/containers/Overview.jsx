// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';

import Header from '../components/Header';
import { requestVenues, setNewLocation } from '../actions';
import { MainContainer, Loading } from '../styles/containers';
import getLocation from '../helpers/geolocation';
import formExploreRequest from '../helpers/processing';
import {
  selectorVenues,
  selectorLoading,
  selectorRequestQueryParams,
} from '../selectors';
import type {
  DefaultState,
  APIVenue,
  QueryParams,
  RequestOptions,
} from '../types';

import List from './List';

type StateProps = {
  venues: Array<?APIVenue>,
  loading: boolean,
  queryParams: QueryParams,
};
type DispatchProps = {
  requestVenues: (url: string, options: RequestOptions) => void,
  setNewLocation: (id: string) => void,
};
type OwnProps = {
  venues: Array<APIVenue>,
};
type Props = StateProps & DispatchProps & OwnProps;

const mapStateToProps = (state: DefaultState) => ({
  venues: selectorVenues(state),
  loading: selectorLoading(state),
  queryParams: selectorRequestQueryParams(state),
});

const mapDispatchToProps = {
  requestVenues,
  setNewLocation,
};

class CompactView extends Component<Props> {
  componentWillMount() {
    this.sendVenuesRequest();
  }

  @autobind
  onLocationChange(e: SyntheticInputEvent<HTMLInputElement>) {
    const { id, value } = e.target;
    const { ll } = this.props.queryParams;
    const [lat, lng] = ll.split(',');
    const coordinates = { lat, lng };
    coordinates[id] = value;
    const newLL = Object.values(coordinates).join(',');
    if (ll !== newLL) {
      this.props.setNewLocation(newLL);
    }
  }

  @autobind
  getUserLocation() {
    // TODO: Disable button and show spinner while location is being requested
    getLocation(ll => this.props.setNewLocation(ll));
  }

  @autobind
  reSubmitQuery() {
    this.sendVenuesRequest();
  }

  sendVenuesRequest() {
    const { url, ...options } = formExploreRequest(this.props.queryParams);
    this.props.requestVenues(url, options);
  }

  render() {
    if (this.props.loading) {
      return <Loading>Fetching data...</Loading>;
    }
    return (
      <MainContainer>
        <Header
          queryParams={this.props.queryParams}
          getUserLocation={this.getUserLocation}
          reSubmitQuery={this.reSubmitQuery}
          onLocationChange={this.onLocationChange}
        />
        <List venues={this.props.venues} />
      </MainContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompactView);
