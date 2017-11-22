// @flow
import { AMSTERDAM_LATITUDE_LONGITUDE } from '../constants';

type Callback = string => void;

const success = (callback: Callback, position: Object) =>
  callback(`${position.coords.latitude},${position.coords.longitude}`);

const error = (callback: Callback) => {
  // TODO: Better handling user input for new location
  // eslint-disable-next-line no-alert
  const newLocation: ?string = window.prompt(
    `We cannot detect your location. ` +
      `Your browser might not support it, it could be blocked in your settings ` +
      `or your connection isn't secure. Would you like to enter your location ` +
      `manualy? In case of incorrect value we'll use default location.`,
  );
  if (!newLocation) {
    return callback(AMSTERDAM_LATITUDE_LONGITUDE);
  }

  // ll stays for `latitude & longitude`; this abbreviation is taken from API
  const ll = newLocation.split(',').map(value => parseFloat(value));
  if (Number.isFinite(ll[0]) && Number.isFinite(ll[1])) {
    ll.length = 2;
    return callback(ll.join(','));
  }
  return callback(AMSTERDAM_LATITUDE_LONGITUDE);
};

export default (callback: Callback) => {
  if (!navigator.geolocation) {
    return error(callback);
  }

  return navigator.geolocation.getCurrentPosition(
    success.bind(this, callback),
    error.bind(this, callback),
  );
};
