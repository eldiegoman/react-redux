import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react'


import HomeStyled from './home.styled';
import { LayoutContainer } from '../../Components/layoutContainer';

import { PublicationsGrid } from '../../Components/publicationsGrid';

import * as homeActs from '../../state/modules/home/actions';
class Home extends Component {

  static defaultProps = {

  }
  state = {
    title: 'Welcome'
  }

  componentDidMount() {
    const { homeActions } = this.props;

    if (homeActions && homeActions.fetchHome) homeActions.fetchHome();
  }

  render() {
    const { publications } = this.props;


    return (

      <LayoutContainer>
        <HomeStyled>
          <div>
            <span>Filter date</span>
            <span>Filter Name</span>
            <span>Filter Email</span>
            <input type="text"></input>
            <PublicationsGrid publications={publications}></PublicationsGrid>
          </div>
        </HomeStyled>

      </LayoutContainer>

    )
  }
}

const mapStateToProps = (reducers) => {
  return reducers.home;
}

const mapDispatchToProps = dispatch => ({
  homeActions: bindActionCreators(homeActs, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)
