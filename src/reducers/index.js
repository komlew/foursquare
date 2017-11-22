// @flow
import {
  REQUEST,
  FORM,
  VENUE,
  AMSTERDAM_LATITUDE_LONGITUDE,
  AMSTERDAM_ALTITUDE,
  AMSTERDAM_RADIUS,
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
import type { DefaultState, ActionResult } from '../types';

const defaultState = {
  venues: [],
  activeID: '',
  ll: AMSTERDAM_LATITUDE_LONGITUDE,
  alt: AMSTERDAM_ALTITUDE,
  radius: AMSTERDAM_RADIUS,
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

export default function(
  state: DefaultState = defaultState,
  action: ActionResult,
) {
  switch (action.type) {
    case REQUEST.VENUES.INIT:
      return {
        ...state,
        loading: true,
      };
    case REQUEST.VENUES.SUCCESS:
      return {
        ...state,
        total: action.payload.totalResults,
        venues: action.payload.groups[0].items.map(venue => venue.venue),
        loading: false,
        location: action.payload.headerFullLocation,
      };
    case REQUEST.VENUES.FAILED:
      return {
        ...state,
        loading: false,
      };
    case FORM.UPDATE.LOCATION:
      return {
        ...state,
        ll: action.payload.ll,
      };
    case VENUE.SET_ACTIVE:
      return {
        ...state,
        activeID: action.payload.id,
      };
    default:
      return state;
  }
}
