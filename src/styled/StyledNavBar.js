import { HashLink } from "react-router-hash-link";
import logo from "../images/common/logo.jpg";
import styled from "styled-components";

const StyledNavBar = styled.div`
  width: 100%;
  height: 66px;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
`;

const StyledLogo = styled.div`
  height: 64px;
  width: 160px;
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
  background: url(${logo}) no-repeat center/contain;

  h1 {
    margin: 0;
  }
`;

const StyledNavBarLink = styled(HashLink)`
  text-decoration: none;
  display: none;
  padding: 20px 16px;
  color: white;

  @media screen and (min-width: 769px) {
    display: block;
  }
`;

const StyledMenu = styled.div`
  display: block;
  position: fixed;
  top: 8px;
  right: 16px;
  width: 48px;
  height: 48px;
  cursor: pointer;
  z-index: 2;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const StyledOpenLine = styled.div`
  width: 32px;
  height: 2px;
  background: #d5a26f;
  margin: 0 auto;
  &:nth-child(1) {
    top: 12px;
  }
  &:nth-child(2) {
    top: 22px;
  }
  &:nth-child(3) {
    top: 32px;
  }
`;

const StyledClose = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 48px;
  height: 2px;
  background: #d5a26f;

  &:nth-child(1) {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:nth-child(2) {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export {
  StyledNavBar,
  StyledLogo,
  StyledNavBarLink,
  StyledMenu,
  StyledOpenLine,
  StyledClose,
};
