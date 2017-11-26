// @flow
import type { DefaultState } from '../types';

// Returns the main app data
export const selectorVenues = (state: DefaultState) => state.venues;
export const selectorZoom = (state: DefaultState) => state.zoom;

// Return filters used in the interface and in data request query
export const selectorLL = (state: DefaultState) => state.ll;
export const selectorAlt = (state: DefaultState) => state.alt;
export const selectorRadius = (state: DefaultState) => state.radius;
export const selectorSection = (state: DefaultState) => state.section;
export const selectorQuery = (state: DefaultState) => state.query;
export const selectorLimit = (state: DefaultState) => state.limit;
export const selectorOffset = (state: DefaultState) => state.offset;
export const selectorVenuePhotos = (state: DefaultState) => state.venuePhotos;
export const selectorOpenNow = (state: DefaultState) => state.openNow;
export const selectorSortByDistance = (state: DefaultState) =>
  state.sortByDistance;
export const selectorPrice = (state: DefaultState) => state.price;

export const selectorRequestQueryParams = (state: DefaultState) => ({
  ll: selectorLL(state),
  alt: selectorAlt(state),
  radius: selectorRadius(state),
  section: selectorSection(state),
  query: selectorQuery(state),
  limit: selectorLimit(state),
  offset: selectorOffset(state),
  venuePhotos: selectorVenuePhotos(state),
  openNow: selectorOpenNow(state),
  sortByDistance: selectorSortByDistance(state),
  price: selectorPrice(state),
});

// Total amount of returned venues
export const selectorTotal = (state: DefaultState) => state.total;

// Returns state of the application
export const selectorLoading = (state: DefaultState) => state.loading;

// Currentry active (selected) venue
export const selectorActiveID = (state: DefaultState) => state.activeID;

// Approximate location name
export const selectorLocation = (state: DefaultState) => state.location;
