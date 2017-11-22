// @flow
// flow-disable-next-line
import { call, put } from 'redux-saga/effects';

import { REQUEST } from '../constants';
import sendRequest from '../helpers/fetch';
import type { ActionRequestVenues } from '../types';

export default function*(action: ActionRequestVenues): Generator<*, *, *> {
  const { url, options } = action.payload;

  try {
    const venuesData = yield call(sendRequest, url, options);
    yield put({
      type: REQUEST.VENUES.SUCCESS,
      payload: venuesData.response,
    });
  } catch (error) {
    // TODO: Proper error handling on request error
    // TODO: Sometimes API returns total number, but no venues and warning
    yield put({
      type: REQUEST.VENUES.FAILED,
    });
  }
}
