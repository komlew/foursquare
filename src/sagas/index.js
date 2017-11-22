// @flow
// flow-disable-next-line
import { takeLatest, all } from 'redux-saga/effects';

import { REQUEST } from '../constants';

import requestVenues from './venues';

export function* watchExploreRequests(): Generator<*, *, *> {
  yield takeLatest(REQUEST.VENUES.INIT, requestVenues);
}

export default function* sagas(): Generator<*, *, *> {
  yield all([watchExploreRequests()]);
}
