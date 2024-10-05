import styled from "styled-components";

const StyledTitle = styled.div`
  font-size: ${(props) => props.size || "32px"};
  font-weight: bolder;
  text-align: ${(props) => props.$text || "center"};
  color: ${(props) => props.color || "white"};
`;

export default StyledTitle;
