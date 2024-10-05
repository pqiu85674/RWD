import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.$direction || "row"};
  justify-content: ${(props) => props.$justify || "center"};
  align-items: ${(props) => props.$items || "center"};
  gap: ${(props) => props.$gap || "0"};
  flex-wrap: ${(props) => props.$wrap || "nowrap"};
  ${(props) => props.$add || ""};
`;

export default StyledFlex;
