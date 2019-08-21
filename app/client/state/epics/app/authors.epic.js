import {
  catchError,
  map,
  startWith,
  mergeMap,
  takeUntil,
} from 'rxjs/operators';
import { of, from } from 'rxjs';
import { ofType } from 'redux-observable';

import * as appActions from '../../modules/app/actions';
import appActionTypes from '../../modules/app/actionTypes';
import { fetch } from '../../api/fetchAuthors.api';


function authorsEpic(action$) {
  return action$.pipe(
    ofType(appActionTypes.FETCH_AUTHORS),
    mergeMap(() => {
      return fetch().pipe(
        map(response => {
          return appActions.fetchAuthorsSuccess(JSON.parse(response).data)
        }),

        catchError(error => of(appActions.fetchAuthorsFailure(error))),
        takeUntil(
          action$.pipe(ofType(appActionTypes.FETCH_AUTHORS_FAILURE))
        ),
        startWith(appActions.fetchAuthorsRequest())
      )
    })
  );
}


export default authorsEpic;
