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

import * as detailActions from '../../modules/detail/actions';
import detailActionTypes from '../../modules/detail/actionTypes';
import { fetchById } from '../../api/fetchAuthors.api';


function authorEpic(action$) {
  return action$.pipe(
    ofType(detailActionTypes.FETCH_AUTHOR),
    switchMap(action =>
      fetchById(action.payload.authorId).pipe(
        map(response => {
          return detailActions.fetchAuthorSuccess(JSON.parse(response).data)
        }),
        catchError(error => of(detailActions.fetchAuthorFailure(error))),
        takeUntil(
          action$.pipe(ofType(detailActionTypes.FETCH_AUTHOR_FAILURE))
        ),
        startWith(detailActions.fetchAuthorRequest())
      )
    )
  );
}


export default authorEpic;
