import styled from "styled-components";
const StyledServices = styled.div`
  background-color: #efefef;
  padding: 200px 0;
`;


const StyledInfo = styled.div``;

const StyledItem = styled.div`
  padding: 10px 20px;
`;

const StyledProdcut = styled.div`
  width: 100%;
  padding-top: 75%;
  background: url(${(props) => props.$url}) no-repeat center/cover;
`;

const StyledInfoTitle = styled.div`
  font-weight:600;
  font-size: 24px;
  margin: 20px 0 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledInfoH5 = styled.h5`
  color: #b2875c;
`;

const StyledInfoText = styled.div`
  margin: 20px 0;
  text-align: justify;
  font-size: 16px;
  line-height: 20px;
  height: 60px;
  overflow: hidden;
`;

export {
  StyledServices,
  StyledInfo,
  StyledItem,
  StyledProdcut,
  StyledInfoTitle,
  StyledInfoH5,
  StyledInfoText,
};
