// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';

import Header from '../components/Header';
import { requestVenues, setNewLocation, setRadius } from '../actions';
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
  setRadius: (radius: number) => void,
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
  setRadius,
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
  onRadiusChange(e: SyntheticInputEvent<HTMLInputElement>) {
    const { value } = e.target;
    const radius = parseInt(value, 10);
    if (Number.isFinite(radius) && radius !== this.props.queryParams.radius) {
      this.props.setRadius(radius);
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
    return (
      <MainContainer>
        <Header
          queryParams={this.props.queryParams}
          getUserLocation={this.getUserLocation}
          reSubmitQuery={this.reSubmitQuery}
          onLocationChange={this.onLocationChange}
          onRadiusChange={this.onRadiusChange}
        />
        {this.props.loading ? (
          <Loading>Fetching data...</Loading>
        ) : (
          <List venues={this.props.venues} />
        )}
      </MainContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompactView);
