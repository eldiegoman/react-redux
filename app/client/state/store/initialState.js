import { fromJS } from 'immutable';

const initialState = fromJS({
  home: {
    isFetching: false,
    publications: []
  }
});

export default initialState;
