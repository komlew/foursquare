// @flow

export type PriceOption = 1 | 2 | 3 | 4;

export type QueryParams = {
  ll: string,
  alt: number,
  radius: number,
  section: string,
  query: string,
  limit: number,
  offset: number,
  venuePhotos: 0 | 1,
  openNow: 0 | 1,
  sortByDistance: 0 | 1,
  price: Array<PriceOption>,
};

export type RequestOptions = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  query: QueryParams,
};

export type Venue = {
  id: string,
  title: string,
  lat: number,
  lng: number,
};

export type VenueCategory = {
  icon: {
    prefix: string,
    suffix: string,
  },
  id: string,
  name: string,
  pluralName: string,
  shortName: string,
};

export type APIVenue = {
  beenHere: boolean,
  categories: Array<?VenueCategory>,
  contact: {
    formattedPhone: string,
    phone: string,
  },
  hours: {
    status: string,
  },
  id: string,
  location: {
    distance: number,
    formattedAddress: Array<string>,
    lat: number,
    lng: number,
  },
  name: string,
  photos: {
    count: number,
  },
  price: {
    currency: string,
    message: string,
    tier: PriceOption,
  },
  rating: number,
  ratingColor: string,
  url: string,
  verified: boolean,
};

export type NonQueryState = {
  venues: Array<?APIVenue>,
  activeID: string,
  location: string,
  loading: boolean,
  total: number,
};

export type DefaultState = NonQueryState & QueryParams;

export type MapProps = {
  venues: Array<Venue>,
  center: string,
  activeID: string,
  onClick: (id: string, shouldScroll: boolean) => void,
};
export type MapAPIProps = {
  venues: Array<APIVenue>,
  center: string,
  activeID: string,
  onClick: (id: string, shouldScroll: boolean) => void,
};
export type CardProps = {
  venue: APIVenue,
  active: boolean,
  onClick: (id: string, shouldScroll: boolean) => void,
};

export type ActionRequestVenues = {
  type: 'REQUEST_VENUES_INIT',
  payload: {
    url: string,
    options: QueryParams,
  },
};
export type ActionSetNewLocation = {
  type: 'FORM_UPDATE_LOCATION',
  payload: {
    ll: string,
  },
};
export type ActionSetActiveVenue = {
  type: 'VENUE_SET_ACTIVE',
  payload: {
    id: string,
  },
};

type ResponseAPIGroup = {
  items: Array<{ venue: APIVenue }>,
  name: string,
  type: string,
};
type ResponseAPI = {
  groups: Array<ResponseAPIGroup>,
  headerFullLocation: string,
  query: string,
  totalResults: number,
};

export type ActionRequestVenuesSuccess = {
  type: 'REQUEST_VENUES_SUCCESS',
  payload: ResponseAPI,
};
export type ActionRequestVenuesFailed = {
  type: 'REQUEST_VENUES_FAILED',
};

export type ActionResult =
  | ActionRequestVenues
  | ActionSetNewLocation
  | ActionSetActiveVenue
  | ActionRequestVenuesSuccess
  | ActionRequestVenuesFailed;
