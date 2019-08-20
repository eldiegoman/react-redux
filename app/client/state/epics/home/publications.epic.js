import {
  catchError,
  map,
  startWith,
  switchMap,
  mergeMap,
  takeUntil,
  flatMap,
} from 'rxjs/operators';
import { of, from } from 'rxjs';
import { ofType } from 'redux-observable';

import * as homeActions from '../../modules/home/actions';
import homeActionTypes from '../../modules/home/actionTypes';
import { fetch } from '../../api/fetchHome.api';


function homeEpic(action$) {
  return action$.pipe(
    ofType(homeActionTypes.FETCH_HOME),
    switchMap(() => {
      return fetch().pipe(
        map(response => homeActions.fetchHomeSuccess(response.data)),
        catchError(error => of(homeActions.fetchHomeFailure(error))),
        takeUntil(
          action$.pipe(ofType(homeActionTypes.FETCH_HOME_FAILURE))
        ),
        startWith(homeActions.fetchHomeRequest())
      )
    })
  );
}


export default homeEpic;
