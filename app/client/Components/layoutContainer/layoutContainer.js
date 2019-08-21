import PropTypes from 'prop-types'
import React from 'react'

import LayoutContainerStyled from './layoutContainer.styled'

const LayoutContainer = props => {
  const {
    children,
    className,
    ...rest
  } = props

  return (
    <LayoutContainerStyled>
      {children}
    </LayoutContainerStyled>
  )
}

LayoutContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

LayoutContainer.defaultProps = {
  children: undefined,
  className: undefined
}

export default LayoutContainer
