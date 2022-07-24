import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  color: {
    primaryGreen: "#10ab5a",
    primaryPink: "#f99ac9",
    secondaryYellow: "e6d425",
    secondaryLightBlue: "35b4f6",
    secondaryBlue: "008bf2",
  },
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  mobile: customMediaQuery(800),
};
