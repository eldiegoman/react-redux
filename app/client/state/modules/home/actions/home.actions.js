import { createAction } from 'redux-actions';
import homeActionTypes from '../actionTypes';

export const fetchHome = createAction(
  homeActionTypes.FETCH_HOME
);

export const fetchHomeCancel = createAction(
  homeActionTypes.FETCH_HOME_CANCEL
);

export const fetchHomeFailure = createAction(
  homeActionTypes.FETCH_HOME_FAILURE,
  error => {
    return error;
  }
);

export const fetchHomeRequest = createAction(
  homeActionTypes.FETCH_HOME_REQUEST
);

export const fetchHomeSuccess = createAction(
  homeActionTypes.FETCH_HOME_SUCCESS,
  response => {
    console.log("TCL: response", response)
    return response
  }
);
