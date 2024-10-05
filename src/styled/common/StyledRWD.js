import styled from "styled-components";

const generateColumns = (size) => {
  let styles = "";
  for (let i = 1; i <= 12; i++) {
    if (size !== "") {
      styles += `
    .col-${size}-${i} {
      width:${(100 / 12) * i}%;
    }
    `;
    } else {
      styles += `
      .col-${i} {
        width:${(100 / 12) * i}%;
      }
      `;
    }
  }
  return styles;
};

const StyledRWD = styled.div`
  ${generateColumns("")}
  @media screen and (min-width: 541px) {
    ${generateColumns("md")}
  }
  @media screen and (min-width: 769px) {
    ${generateColumns("lg")}
  }
`;

export default StyledRWD;
