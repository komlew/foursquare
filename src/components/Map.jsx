// @flow
import React from 'react';
import type { Node } from 'react';

import { MapContainer } from '../styles/containers';
import { MAPS_API } from '../constants';
import type { MapAPIProps } from '../types';

import GoogleMap from './GoogleMap';

export default ({
  zoom,
  venues,
  center,
  activeID,
  onClick,
  onCenterChanged,
  onZoomChanged,
}: MapAPIProps): Node => {
  const venuesObject = venues.map(venue => ({
    lat: venue.location.lat,
    lng: venue.location.lng,
    title: venue.name,
    id: venue.id,
  }));
  const centerArray = center.split(',');
  const centerObject = {
    lat: parseFloat(centerArray[0]),
    lng: parseFloat(centerArray[1]),
  };
  return (
    <GoogleMap
      googleMapURL={`${MAPS_API.URL}?key=${MAPS_API.CREDENTIALS.key}`}
      containerElement={<MapContainer />}
      loadingElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      zoom={zoom}
      venues={venuesObject}
      center={centerObject}
      onClick={onClick}
      onCenterChanged={onCenterChanged}
      onZoomChanged={onZoomChanged}
      activeID={activeID}
    />
  );
};
