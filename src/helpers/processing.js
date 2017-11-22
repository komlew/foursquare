// @flow
import { EXPLORE_API } from '../constants';
import type { QueryParams } from '../types';

export default (queryParams: QueryParams) => {
  const date = new Date();
  return {
    url: EXPLORE_API.URL,
    method: 'GET',
    query: {
      v: `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`,
      ...queryParams,
      ...EXPLORE_API.CREDENTIALS,
    },
  };
};
