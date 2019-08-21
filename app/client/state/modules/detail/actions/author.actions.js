import { createAction } from 'redux-actions';
import detailActionTypes from '../actionTypes';

export const fetchAuthor = createAction(
  detailActionTypes.FETCH_AUTHOR,
  authorId => ({ authorId })
);

export const fetchAuthorCancel = createAction(
  detailActionTypes.FETCH_AUTHOR_CANCEL
);

export const fetchAuthorFailure = createAction(
  detailActionTypes.FETCH_AUTHOR_FAILURE,
  error => {
    return error;
  }
);

export const fetchAuthorRequest = createAction(
  detailActionTypes.FETCH_AUTHOR_REQUEST
);

export const fetchAuthorSuccess = createAction(
  detailActionTypes.FETCH_AUTHOR_SUCCESS,
  response => {
    return response
  }
);
