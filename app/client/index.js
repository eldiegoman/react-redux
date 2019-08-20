import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from "styled-components";

import history from './history'
import App from './Components/App.js'
import { store } from './state/store/createStore'
import theme from './styles/theme';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>, document.getElementById('app')
)
