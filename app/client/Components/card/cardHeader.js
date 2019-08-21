import { pickHTMLProps } from "pick-react-known-prop";
import PropTypes from "prop-types";
import React from "react";

import CardHeaderStyled, {
  Heading
} from "./CardHeader.styled";

const CardHeader = props => {
  const { children, ...rest } = props;

  return (
    <CardHeaderStyled {...pickHTMLProps(rest)}>
      <Heading>{children}</Heading>
    </CardHeaderStyled>
  );
};

CardHeader.propTypes = {
  children: PropTypes.node
};

CardHeader.defaultProps = {};

export default CardHeader;
