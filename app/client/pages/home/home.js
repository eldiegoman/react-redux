import React from 'react'

import { LayoutContainer } from '../../Components/layoutContainer';
import HomeStyled from './home.styled';

class Home extends React.Component {

  static defaultProps = {

  }
  state = {
    title: 'Welcome'
  }

  componentDidMount() {

  }

  render() {
    const { children } = this.props;

    return (

      <LayoutContainer>
        <HomeStyled>
          <div>
            <span>Filter date</span>
            <span>Filter Name</span>
            <span>Filter Email</span>
            <input type="text"></input>
            <div>content</div>
          </div>
        </HomeStyled>

      </LayoutContainer>

    )
  }
}

export default Home
