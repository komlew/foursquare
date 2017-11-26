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

const mapCenter = (() => {
  let mapRef;
  let dispatch;
  return {
    setRef: ref => {
      mapRef = ref;
    },
    setCallback: callback => {
      dispatch = callback;
    },
    setCenter: () => {
      if (
        mapRef &&
        typeof mapRef.getCenter === 'function' &&
        typeof dispatch === 'function'
      ) {
        const center = mapRef.getCenter();
        const ll = [center.lat(), center.lng()].join(',');
        dispatch(ll);
      }
    },
  };
})();

export default withScriptjs(
  withGoogleMap(
    ({ venues, center, activeID, onClick, onCenterChanged }: MapProps): Node =>
      mapCenter.setCallback(onCenterChanged) || (
        <GoogleMap
          defaultZoom={DEFAULT_MAP_ZOOM}
          defaultCenter={center}
          ref={ref => mapCenter.setRef(ref)}
          onCenterChanged={mapCenter.setCenter}
        >
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
      ),
  ),
);
