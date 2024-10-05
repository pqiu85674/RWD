import styled from "styled-components";

const StyledText = styled.div`
  text-align: ${(props) => props.$text || "center"};
  margin: 20px 0;
  font-size: 16px;
  line-height: 32px;
  color: ${(props) => props.color};
`;

export default StyledText;
