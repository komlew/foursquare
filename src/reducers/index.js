// @flow
import { REQUEST, FORM, VENUE } from '../constants';
import type { DefaultState, ActionResult } from '../types';

import defaultState from './defaultState';

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
    case FORM.UPDATE.ZOOM:
      return {
        ...state,
        zoom: action.payload.zoom,
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
