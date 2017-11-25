// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';

import Map from '../components/Map';
import VenueCard from '../components/VenueCard';
import ListHeader from '../components/ListHeader';
import { setActiveVenue } from '../actions';
import { ListContainer, ContainerFooter } from '../styles/containers';
import { scrollToActive } from '../helpers/elementManipulations';
import {
  selectorTotal,
  selectorLL,
  selectorActiveID,
  selectorLocation,
} from '../selectors';
import type { DefaultState, APIVenue } from '../types';

type StateProps = {
  total: number,
  center: string,
  activeID: string,
  location: string,
};
type DispatchProps = {
  setActiveVenue: (id: string) => void,
};
type OwnProps = {
  venues: Array<APIVenue>,
};
type Props = StateProps & DispatchProps & OwnProps;

const mapStateToProps = (state: DefaultState): StateProps => ({
  total: selectorTotal(state),
  center: selectorLL(state),
  activeID: selectorActiveID(state),
  location: selectorLocation(state),
});

const mapDispatchToProps = {
  setActiveVenue,
};

class List extends Component<Props> {
  @autobind
  onClick(id, shouldScroll) {
    if (this.props.activeID !== id) {
      this.props.setActiveVenue(id);
    }
    if (shouldScroll) {
      scrollToActive();
    }
  }

  render() {
    return [
      <ListHeader
        key="header"
        location={this.props.location}
        total={this.props.total}
      />,
      <Map
        key="map"
        venues={this.props.venues}
        center={this.props.center}
        onClick={this.onClick}
        activeID={this.props.activeID}
      />,
      <ListContainer
        key="list"
        data-empty={this.props.venues.length ? null : 'No results'}
      >
        {Boolean(this.props.venues.length) &&
          this.props.venues.map(venue => (
            <VenueCard
              key={venue.id}
              venue={venue}
              onClick={this.onClick}
              active={this.props.activeID === venue.id}
            />
          ))}
      </ListContainer>,
      <ContainerFooter key="footer" />,
    ];
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
