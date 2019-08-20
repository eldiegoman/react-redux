import { ajax } from 'rxjs/ajax';
import { createStore, compose, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable';

import rootReducers from '../reducers';
import { rootEpic } from '../epics/index';

function makeStore() {
  const epicMiddleware = createEpicMiddleware({
    dependencies: { getJSON: ajax.getJSON }
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(rootReducers,
    composeEnhancers(
      applyMiddleware(epicMiddleware)
    )
  )

  epicMiddleware.run(rootEpic);
  return store
}

export const store = makeStore();