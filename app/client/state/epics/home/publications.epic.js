import {
  catchError,
  map,
  startWith,
  mergeMap,
  takeUntil,
} from 'rxjs/operators';
import { of, from } from 'rxjs';
import { ofType } from 'redux-observable';

import * as homeActions from '../../modules/home/actions';
import homeActionTypes from '../../modules/home/actionTypes';
import { fetch } from '../../api/fetchHome.api';


function homeEpic(action$) {
  return action$.pipe(
    ofType(homeActionTypes.FETCH_HOME),
    mergeMap(() => {
      return fetch().pipe(
        map(response => homeActions.fetchPublicationsSuccess(response.data)),
        catchError(error => of(homeActions.fetchPublicationsFailure(error))),
        takeUntil(
          action$.pipe(ofType(homeActionTypes.FETCH_HOME_FAILURE))
        ),
        startWith(homeActions.fetchPublicationsRequest())
      )
    })
  );
}


export default homeEpic;
