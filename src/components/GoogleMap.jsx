// @flow
import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import type { Node } from 'react';

import { DEFAULT_MAP_ZOOM } from '../constants';
import type { MapProps } from '../types';

declare var google: { maps: { Animation: { BOUNCE: string } } };

export default withScriptjs(
  withGoogleMap(({ venues, center, activeID, onClick }: MapProps): Node => (
    <GoogleMap defaultZoom={DEFAULT_MAP_ZOOM} defaultCenter={center}>
      {venues &&
        venues.map(venue => {
          const click = () => onClick(venue.id, true);
          return (
            <Marker
              key={venue.id}
              title={venue.title}
              animation={
                activeID === venue.id ? google.maps.Animation.BOUNCE : null
              }
              onClick={click}
              position={{ lat: venue.lat, lng: venue.lng }}
            />
          );
        })}
    </GoogleMap>
  )),
);
