import styled from "styled-components";

const CardHeaderStyled = styled.header`
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  display: flex;
  padding: 14px 16px;
`;

export const Heading = styled.h3`
  flex-grow: 1;
  font-family: Gotham;
  font-size: 18px;
  font-weight: 500;
  margin-right: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default CardHeaderStyled;
