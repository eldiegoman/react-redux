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
import { fetchPublicationsById } from '../../api/fetchAuthors.api';


function authorEpic(action$) {
  return action$.pipe(
    ofType(detailActionTypes.FETCH_DETAIL),
    switchMap(action =>
      fetchPublicationsById(action.payload.id).pipe(
        map(response => {
          return detailActions.fetchPublicationsSuccess(JSON.parse(response).data.publications)
        }),
        catchError(error => of(detailActions.fetchPublicationsFailure(error))),
        takeUntil(
          action$.pipe(ofType(detailActionTypes.FETCH_DETAIL_FAILURE))
        ),
        startWith(detailActions.fetchPublicationsRequest())
      )
    )
  );
}


export default authorEpic;
