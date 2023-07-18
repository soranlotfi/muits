import {createTheme, PaletteColor, PaletteColorOptions, Theme} from "@mui/material";
import {Colors} from "./base/color";
import borders, {BorderOptions} from "./base/borders";
import boxShadows, {boxShadowOptions} from "./base/boxShodows";
import typography from "./base/typographyRtl";
import {SimplePaletteColorOptions} from "@mui/material/styles/createPalette";
import boxShodows from "./base/boxShodows";
import * as React from "react";

declare module '@mui/material/styles' {
    interface Theme {
        border: BorderOptions
        boxShadow: boxShadowOptions
    }

    interface ThemeOptions {
        border: BorderOptions
        boxShadow: boxShadowOptions
    }

    interface Palette {
        white: PaletteColor
        gradients: PaletteColor
        socialMediaColors?: PaletteColor
    }


    interface PaletteOptions {
        coloredShadows: PaletteColorOptions
        white: PaletteColor
        gradients: PaletteColor
        black: PaletteColor;
        tabs: PaletteColor
        socialMediaColors: soicalColors
        badgeColors?: PaletteColor


    }

    interface PaletteColor {
        main: string
        focus?: string
        second?: string
        third?: string
        fourth?: string
        indicator?: PaletteColorOptions
    }

    interface soicalColors {
        facebook: socialColorOptions,
        twitter: socialColorOptions,
        instagram: socialColorOptions,
        linkedin: socialColorOptions,
        pinterest: socialColorOptions,
        youtube: socialColorOptions,
        vimeo: socialColorOptions,
        slack: socialColorOptions,
        dribbble: socialColorOptions,
        github: socialColorOptions,
        reddit: socialColorOptions,
        tumblr: socialColorOptions,
    }

    interface socialColorOptions {
        main?: string,
        dark?: string,
    }

    interface PaletteColorOptions {
        main?: string;
        focus?: string;
        dark?: string;
        light?: string;
        contrastText?: string;
        stats?: string;
        second?: string;
        third?: string;
        fourth?: string;
        state?: string
    }

    interface SimplePaletteColorOptions {
        main: string;
        focus?: string;
        stats?: string;
        second?: string;
        third?: string;
        fourth?: string;
        facebook?: string;
        twitter?: string;
        linkedin?: string;
        instagram?: string;
        state?: string

    }

}

interface TypeText {
    main?: string
    primary: string;
    secondary: string;
    disabled: string;
}



const theme = createTheme({
    direction: "rtl",
    palette: {...Colors},
    border: {...borders},
    boxShadow: {...boxShadows},
    typography:{...typography}

});
export default theme;