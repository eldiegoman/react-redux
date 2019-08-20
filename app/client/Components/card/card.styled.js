import styled from "styled-components";
import get from 'lodash/get';

const CardStyled = styled.div`
  background-color: #ffffff;
  border-radius: 3px;
  grid-row-end: ${props => {
    const { gridData, theme: { grid } } = props;

    const rowEnd = get(grid, gridData, grid['default'])
    return rowEnd.rowEnd;
  }};
    grid-column-end: ${props => {
    const { gridData, theme: { grid } } = props;

    const columnEnd = get(grid, gridData, grid['default'])
    return columnEnd.columnEnd;
  }};
`;

export default CardStyled;
