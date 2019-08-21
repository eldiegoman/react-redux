import { fromJS } from 'immutable';

const initialState = fromJS({
  home: {
    isFetching: false,
    publications: [],
    author: {
      id: null,
      name: null
    }
  }
});

export default initialState;
