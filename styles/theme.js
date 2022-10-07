import { extendTheme } from "@chakra-ui/react";
import { theme as chakraTheme } from '@chakra-ui/react';
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
    ...chakraTheme.fonts,
    body: 'Verdana,Helvetica,Arial,sans-serif',
    heading: 'Verdana,Helvetica,Arial,sans-serif'

}

const breakpoints = {
    sm: "40em",
    md: "52em",
    lg: "64em",
    xl: "80em",
}
 
const overrides = {
    ...chakraTheme, 
    fonts,
    breakpoints,
    fontWeights: {
        normal: 300,
        medium: 600,
        bold: 800,
    },
    fontSizes: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "36px",
        "5xl": "48px",
        "6xl": "64px",
    }
}

const customTheme = extendTheme(overrides)

export default customTheme