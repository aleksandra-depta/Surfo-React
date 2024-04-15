import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryDark: string;
      primaryHalf: string;
      primary20: string;
      primaryLight: string;
      secondary: string;
      secondaryLight: string;

      white: string;
      white20: string;
      whiteText: string;
      whiteTextTransp: string;
      darkText: string;
      darkTextTransp: string;
      lightText: string;

      greyShades: string;
      greyLightShades: string;
      lightShades: string;
    };
  }
}
