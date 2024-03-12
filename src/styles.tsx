import { createGlobalStyle } from "styled-components";

export const Colors = {
  paleOrange: "#FFEBD9",
  paleWhiteOrange: "#FFF8F2",
  red: "#E66767",
  yellow: "#FFB930",
};

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body{
    background-color: ${Colors.paleWhiteOrange};
    color: ${Colors.red};
  }
`;
