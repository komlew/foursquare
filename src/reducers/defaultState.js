// @flow
import {
  AMSTERDAM_LATITUDE_LONGITUDE,
  AMSTERDAM_ALTITUDE,
  AMSTERDAM_RADIUS,
  DEFAULT_MAP_ZOOM,
  DEFAULT_SECTION,
  DEFAULT_QUERY,
  DEFAULT_LIMIT,
  DEFAULT_OFFSET,
  DEFAULT_SHOW_PHOTOS,
  DEFAULT_OPEN_NOW,
  DEFAULT_SORT_BY_DISTANCE,
  DEFAULT_PRICE,
  DEFAULT_LOCATION,
} from '../constants';
import type { DefaultState } from '../types';

const defaultState: DefaultState = {
  venues: [],
  activeID: '',
  ll: AMSTERDAM_LATITUDE_LONGITUDE,
  alt: AMSTERDAM_ALTITUDE,
  radius: AMSTERDAM_RADIUS,
  zoom: DEFAULT_MAP_ZOOM,
  section: DEFAULT_SECTION,
  query: DEFAULT_QUERY,
  limit: DEFAULT_LIMIT,
  offset: DEFAULT_OFFSET,
  venuePhotos: DEFAULT_SHOW_PHOTOS,
  openNow: DEFAULT_OPEN_NOW,
  sortByDistance: DEFAULT_SORT_BY_DISTANCE,
  price: DEFAULT_PRICE,
  location: DEFAULT_LOCATION,
  loading: true,
  total: 0,
};

export default defaultState;
