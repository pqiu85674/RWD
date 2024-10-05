import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  border: 1px solid red;
  ${(props) => props.$add}
`;
export default StyledContainer;
