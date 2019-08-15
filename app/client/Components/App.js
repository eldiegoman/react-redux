import React from 'react'

import { Home } from '../pages/home'
class App extends React.Component {

  state = {
    title: 'Welcome'
  }

  componentDidMount() {

  }

  render() {
    const { title } = this.state

    return (
      <Home />
    )
  }
}

export default App
