import React from 'react'

import { Home } from '../pages/home';
import { Detail } from '../pages/detail';
import { LayoutContainer } from '../Components/layoutContainer';
import { Route, Link } from "react-router-dom";
class App extends React.Component {

  state = {
    title: 'Welcome'
  }

  componentDidMount() {

  }

  render() {
    const { title } = this.state

    return (
      <LayoutContainer>
        <div>
          <h3>Users</h3>

          <ul>
            <li>
              <Link to={{ pathname: "/", search: "?id=netflix" }}>
                Netflix
              </Link>
            </li>
            <li>User 2</li>
            <li>User 3</li>
            <li>User 4</li>
          </ul>
        </div>
        <Route
          path="/"
          component={Home}
        />
        <Route
          path="/details"
          component={Detail}
        />
      </LayoutContainer>
    )
  }
}

export default App
