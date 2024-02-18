import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  padding-left: ${props => props.theme.pagePadding};
  padding-right: ${props => props.theme.pagePadding};
  box-sizing: border-box;
  width: ${props => props.theme.pageWidth};
  margin: 0 auto;
  margin-top: 30px;
  padding-top: 0;
  padding-bottom: 0;
  height: 79px;
  background-color: ${props => props.theme.colorWhite};
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`
