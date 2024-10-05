import styled from "styled-components";
import backgroundPicture from "../images/bg/bg001.jpg";
import Logo from "../images/common/logo-w.png";

const StyledJumbotron = styled.div`
  padding: 144px 0 80px;
  width: 100%;
  background: url("${backgroundPicture}") no-repeat fixed center / cover;
  
  @media screen and (min-width: 769px) {
    padding: 224px 0 160px;
  }
`;


const StyledJumbotronLogo = styled.div`
  width: 200px;
  height: 200px;
  background: url("${Logo}") no-repeat center / cover;
  display: block;
  margin: 0 auto;

  @media screen and (min-width: 769px) {
    width: 320px;
    height: 320px;
  }
`;

export { StyledJumbotron, StyledJumbotronLogo };
