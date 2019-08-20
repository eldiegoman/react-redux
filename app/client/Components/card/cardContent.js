import { pickHTMLProps } from "pick-react-known-prop";
import PropTypes from "prop-types";
import React from "react";

import CardContentStyled from "./cardContent.styled";

const CardContent = props => {
  const { children, ...rest } = props;

  return (
    <CardContentStyled {...pickHTMLProps(rest)}>
      {children}
    </CardContentStyled>
  );
};

CardContent.propTypes = {
  children: PropTypes.node
};

CardContent.defaultProps = {};

export default CardContent;
