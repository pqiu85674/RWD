import styled from "styled-components";

const StyledFullScreenContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledFullScreenMenu = styled.div`
  cursor: pointer;
  width: 100%;
  text-align: center;
  color: white;
  padding: 20px 16px;
`;

export { StyledFullScreenContainer, StyledFullScreenMenu };
