import styled from "styled-components";
import bg from "../images/bg/bg003.jpg";
import picture from "../images/common/logo-w.png";

const StyledFooter = styled.div`
  padding: 80px 0;
  background: url(${bg}) no-repeat fixed center / cover;
  @media screen and (min-width: 769px) {
    padding: 200px 0;
  }
`;

const StyledFooterPicture = styled.div`
  margin: 0 auto;
  width: 200px;
  height: 200px;
  background: url(${picture}) no-repeat center / cover;

  @media screen and (min-width: 541px) {
    width: 240px;
    height: 240px;
  }
`;

const StyledFooterLink = styled.div`
  cursor: pointer;
  color: white;
  padding: 24px 8px;
  @media screen and (min-width: 541px) {
    padding: 24px;
  }
`;

const StyledFooterInfo = styled.div`
  line-height: 40px;
  color: white;
  text-align: center;
  background: rgba(0, 0, 0, 0.9);
  width: 100%;
`;

export {
  StyledFooter,
  StyledFooterPicture,
  StyledFooterLink,
  StyledFooterInfo,
};
