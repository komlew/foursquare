// @flow

export const EXPLORE_API = {
  URL: 'https://api.foursquare.com/v2/venues/explore',
  CREDENTIALS: {
    client_id: 'L5DZF2NKTQDRJY1R3FYJVFVC1MWZ55BOPCPR4FYTO3F0JCIX',
    client_secret: 'J1WC5CASABFC1404YGI30K4K53SYOS4KYP1P501QHMJ33V0C',
  },
};

export const MAPS_API = {
  URL: 'https://maps.googleapis.com/maps/api/js',
  CREDENTIALS: {
    key: 'AIzaSyATgGmnKGeTZswuSukRYTbbWUhcEhmssUE',
  },
};

export const AMSTERDAM_LATITUDE_LONGITUDE = '52.376501,4.905895';
export const AMSTERDAM_ALTITUDE = -2; // API requires altitude in meters
export const AMSTERDAM_RADIUS = 500; // API requires radius in meters

export const DEFAULT_MAP_ZOOM = 15;
export const DEFAULT_SECTION = 'food';
export const DEFAULT_QUERY = '';
export const DEFAULT_LIMIT = 20; // max 50
export const DEFAULT_OFFSET = 0; // max 50
export const DEFAULT_SHOW_PHOTOS = 1; // boolean
export const DEFAULT_OPEN_NOW = 0; // boolean
export const DEFAULT_SORT_BY_DISTANCE = 1; // boolean
export const DEFAULT_PRICE = [1, 2, 3, 4]; // [1,2,3,4], where 1 is checp, 4 is expensive
export const DEFAULT_LOCATION = 'Unknown location';

export const REQUEST = {
  VENUES: {
    INIT: 'REQUEST_VENUES_INIT',
    FAILED: 'REQUEST_VENUES_FAILED',
    SUCCESS: 'REQUEST_VENUES_SUCCESS',
  },
};

export const FORM = {
  UPDATE: {
    LOCATION: 'FORM_UPDATE_LOCATION',
    ZOOM: 'FORM_UPDATE_ZOOM',
    RADIUS: 'FORM_UPDATE_RADIUS',
  },
};

export const VENUE = {
  SET_ACTIVE: 'VENUE_SET_ACTIVE',
};
