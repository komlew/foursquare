// @flow
import { REQUEST, FORM, VENUE } from '../constants';
import type { ActionResult, QueryParams } from '../types';

export const requestVenues = (
  url: string,
  options: QueryParams,
): ActionResult => ({
  type: REQUEST.VENUES.INIT,
  payload: {
    url,
    options,
  },
});

export const setNewLocation = (ll: string): ActionResult => ({
  type: FORM.UPDATE.LOCATION,
  payload: {
    ll,
  },
});

export const setActiveVenue = (id: string): ActionResult => ({
  type: VENUE.SET_ACTIVE,
  payload: {
    id,
  },
});
