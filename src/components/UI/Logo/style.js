import styled from "styled-components";
import { Link } from 'react-router-dom'

export const StyledRef = styled(Link)`
display: flex;
margin-left: -4px;
height: 44px;
align-items: center;
text-decoration: none;
color: ${(props) => props.theme.colorBlackForText};

&:hover,&:active, &:visited {
  text-decoration: none;
  color: ${(props) => props.theme.colorBlackForText};
} 
`

export const Text = styled.span`
display: flex;
min-height: 44px;
margin-left: 25px;
font-weight: bold;
font-size: 28px;
line-height: 44px;
color: ${(props) => props.theme.colorBlackForText};
`

