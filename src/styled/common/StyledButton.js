import styled from "styled-components";

const StyledBtnDefault = styled.div`
  display: inline-block;
  padding: 8px 32px;
  border-radius: 5px;
  border: 2px solid #d5a26f;
  font-size: 16px;
  line-height: 24px;
  transition: all 0.3s;
  cursor: pointer;
`;

const StyledBtn = styled(StyledBtnDefault)`
  background: #d5a26f;
  color: white;

  &:hover {
    border: 2px solid #b2875c;
    background: #b2875c;
  }
`;

const StyledBtnSecond = styled(StyledBtnDefault)`
  color: #d5a26f;

  &:hover {
    color: white;
    background: #d5a26f;
  }
`;

export { StyledBtn, StyledBtnSecond };
