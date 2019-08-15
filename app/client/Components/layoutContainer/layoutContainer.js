import PropTypes from 'prop-types';
import React from 'react';

import LayoutContainerStyled from './layoutContainer.styled';

const LayoutContainer = props => {
  const {
    children,
    className,
    ...rest
  } = props;

  return (
    <LayoutContainerStyled>
      <div>
        <h3>Users</h3>

        <ul>
          <li>User 1</li>
          <li>User 2</li>
          <li>User 3</li>
          <li>User 4</li>
        </ul>
      </div>
      {children}
    </LayoutContainerStyled>
  );
};

LayoutContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

LayoutContainer.defaultProps = {
  children: undefined,
  className: undefined
};

export default LayoutContainer;
