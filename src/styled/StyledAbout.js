import styled from "styled-components";
import product005 from "../images/products/product005.jpg";

const StyledAbout = styled.div`
  padding: 200px 0;
`;

const StyledTextContainer = styled.div`
  padding: 10px 15px;
`;


const StyledImageContainer = styled.div`
  padding: 10px;
`;

const StyledImg = styled.div`
  width: 100%;
  padding-top: 75%;
  background: url(${product005}) no-repeat center/cover;
`;

export {
  StyledAbout,
  StyledTextContainer,
  StyledImageContainer,
  StyledImg,
};
