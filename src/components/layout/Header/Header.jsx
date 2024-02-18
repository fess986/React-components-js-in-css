import StyledHeader from './style';

import Logo from "../../UI/Logo/Logo";
import Nav from "../Nav/Nav";

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Nav />
    </StyledHeader>

  )
}