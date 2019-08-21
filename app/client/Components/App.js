import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Home } from '../Components/home';
import { Detail } from '../Components/detail';
import { LayoutContainer } from '../Components/layoutContainer';
import { Route, Link } from "react-router-dom";
import List from '@material-ui/core/List';

import * as appActs from '../state/modules/app/actions';
class App extends React.Component {

  state = {
    title: 'Welcome'
  }

  componentDidMount() {
    const { apppActions, authors } = this.props;

    if (apppActions && !authors.length) {
      apppActions.fetchAuthors();
    }
  }

  buildSideBar = () => {
    const { authors } = this.props;

    if (authors && authors.length) {
      return (
        <div>
          <h4>
            Authors
        </h4>
          <ul>
            <li>
              <Link to="/">Home
            </Link>
            </li>
            {authors.map(item => (
              <li key={item.id}>
                <Link to={`${'/detail/'}${item.id}`}>{`${item.firstName} ${item.lastName}`}</Link>
              </li>
            ))}
          </ul>
        </div>
      );

    } else {
      <div>No results</div>
    }
  }
  render() {
    const { title } = this.state


    return (
      <LayoutContainer>
        {this.buildSideBar()}
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          path="/detail/:authorId"
          component={Detail}
        />
      </LayoutContainer>
    )
  }
}

const mapStateToProps = (reducers) => {
  return reducers.app;
}

const mapDispatchToProps = dispatch => ({
  apppActions: bindActionCreators(appActs, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
