// @flow
import { EXPLORE_API } from '../constants';
import type { QueryParams } from '../types';

export default (queryParams: QueryParams) => {
  const date = new Date();
  const YYYY = date.getFullYear();
  const MM = `0${date.getMonth() + 1}`.slice(-2);
  const DD = `0${date.getDate()}`.slice(-2);
  return {
    url: EXPLORE_API.URL,
    method: 'GET',
    query: {
      v: `${YYYY}${MM}${DD}`,
      ...queryParams,
      ...EXPLORE_API.CREDENTIALS,
    },
  };
};
