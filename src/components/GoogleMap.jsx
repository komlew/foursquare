// @flow
import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import type { Node } from 'react';

import type { Map, MapProps } from '../types';

declare var google: { maps: { Animation: { BOUNCE: string } } };

const mapCenter = (() => {
  let mapRef: ?Map;
  let dispatchLocation;
  let dispatchZoom;
  return {
    setRef: ref => {
      mapRef = ref;
    },
    setCallbacks: (callbackLocation, callbackZoom) => {
      dispatchLocation = callbackLocation;
      dispatchZoom = callbackZoom;
    },
    setCenter: () => {
      if (
        mapRef &&
        typeof mapRef.getCenter === 'function' &&
        typeof dispatchLocation === 'function'
      ) {
        const center = mapRef.getCenter();
        const ll = [center.lat(), center.lng()].join(',');
        dispatchLocation(ll);
      }
    },
    setZoom: () => {
      if (
        mapRef &&
        typeof mapRef.getZoom === 'function' &&
        typeof dispatchZoom === 'function'
      ) {
        const zoom = mapRef.getZoom();
        dispatchZoom(zoom);
      }
    },
  };
})();

export default withScriptjs(
  withGoogleMap(
    ({
      zoom,
      venues,
      center,
      activeID,
      onClick,
      onCenterChanged,
      onZoomChanged,
    }: MapProps): Node =>
      mapCenter.setCallbacks(onCenterChanged, onZoomChanged) || (
        <GoogleMap
          defaultZoom={zoom}
          defaultCenter={center}
          ref={ref => mapCenter.setRef(ref)}
          onCenterChanged={mapCenter.setCenter}
          onZoomChanged={mapCenter.setZoom}
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
