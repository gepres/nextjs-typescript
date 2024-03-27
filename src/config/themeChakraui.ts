import { extendTheme } from "@chakra-ui/react";
import colorsGeneral from "./colorsGeneral";

export const theme = extendTheme({
  colors: {
    ...colorsGeneral
  }
});

export default theme;