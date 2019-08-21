import {
  catchError,
  map,
  startWith,
  switchMap,
  mergeMap,
  takeUntil,
  flatMap,
  debounceTime
} from 'rxjs/operators';
import { of, from } from 'rxjs';
import { ofType } from 'redux-observable';

import * as searchActions from '../../modules/home/actions';
import searchActionTypes from '../../modules/home/actionTypes';
import { search } from '../../api/fetchHome.api';


function searchEpic(action$) {
  return action$.pipe(
    ofType(searchActionTypes.SEARCH),
    debounceTime(500),
    switchMap(action =>
      search(action.payload.term).pipe(
        map(response => searchActions.searchPublicationsSuccess(response.data)),
        catchError(error => of(searchActions.searchPublicationsFailure(error))),
        takeUntil(
          action$.pipe(ofType(searchActionTypes.SEARCH_FAILURE))
        ),
        startWith(searchActions.searchPublicationsSuccess())
      )
    )
  );
}


export default searchEpic;
