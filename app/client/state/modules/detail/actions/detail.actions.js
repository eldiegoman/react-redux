import { createAction } from 'redux-actions';
import detailActionTypes from '../actionTypes';

export const fetchPublications = createAction(
  detailActionTypes.FETCH_DETAIL,
  id => ({ id })
);

export const fetchPublicationsCancel = createAction(
  detailActionTypes.FETCH_DETAIL_CANCEL
);

export const fetchPublicationsFailure = createAction(
  detailActionTypes.FETCH_DETAIL_FAILURE,
  error => {
    return error;
  }
);

export const fetchPublicationsRequest = createAction(
  detailActionTypes.FETCH_DETAIL_REQUEST
);

export const fetchPublicationsSuccess = createAction(
  detailActionTypes.FETCH_DETAIL_SUCCESS,
  response => {
    return response
  }
);

export const filterPublications = createAction(
  detailActionTypes.FILTER,
  key => ({ key })
);