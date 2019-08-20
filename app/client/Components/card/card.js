import { pickHTMLProps } from "pick-react-known-prop";
import PropTypes from "prop-types";
import React, { cloneElement, useState } from "react";
import { withTheme } from 'styled-components';

import cardContent from "./cardContent";
import cardHeader from "./cardHeader";
import CardStyled from "./card.styled";
import findByType from "../../utils/findByType";

const Card = props => {
  const { children, gridData, theme, ...rest } = props;

  const [open, setOpen] = useState(false);

  const Header = findByType(children, cardHeader)[0];

  const Content = findByType(children, cardContent)[0];

  return (
    <CardStyled {...pickHTMLProps(rest)} gridData={gridData}>
      {Header &&
        cloneElement(Header, {
          open
        })}

      {Content && cloneElement(Content)}
    </CardStyled>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  gridData: PropTypes.string
};

Card.defaultProps = {
  gridData: ''
};

Card.Header = cardHeader;

Card.Content = cardContent;

export default withTheme(Card);
