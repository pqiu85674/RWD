import styled from "styled-components";

const StyledMenuContainer = styled.div`
  padding: 200px 0;
`;

const StyledMenuList = styled.div`
  padding: 20px;
`;

const StyledMenuTitle = styled.div`
  margin: 20px 0;
  font-size: 24px;
  line-height: 40px;
  color: #d5a26f;
  border-left: #d5a26f solid 5px;
  padding-left: 20px;
`;

const StyledMenuItem = styled.div`
  color: black;
  cursor: pointer;
  text-align: start;
  padding: 10px;
`;

const StyledMenuProduct = styled.div`
  width: 100%;
  padding-top: 100%;
  background: url(${(props) => props.$url}) no-repeat center/cover;
`;

const StyledMenuItemTitle = styled.div`
  font-size: 20px;
  color: #d5a26f;
  margin: 15px 0;
`;

const StyledMenuItemText = styled.div`
  font-size: 14px;
`;

export {
  StyledMenuContainer,
  StyledMenuList,
  StyledMenuTitle,
  StyledMenuItem,
  StyledMenuProduct,
  StyledMenuItemTitle,
  StyledMenuItemText,
};
