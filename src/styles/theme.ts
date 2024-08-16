import { DefaultTheme } from 'styled-components';

export const theme : DefaultTheme = {
    color : {
        blue : '#3182f6',
        white : '#ffffff',
        black : "#000000",
        red : "ff0000",
        gray100 : "#f0f0f0",
        gray300 : '#c5ccd2',
        gray400 : "#6b7684",
        gray500 : "#676767",
        gray800 : "#323232",
        gray900 : '#333d4b',
    },
    shadow : {
        postShadow1 : '0 1px 3px rgba(0, 0, 0, 0.08)',
        postShadow2 : '0 1px 2px rgba(0, 0, 0, 0.10)',
    },
    shadowHover : {
        postShadowHover1 : '0 3px 6px rgba(0, 0, 0, 0.1)',
        postShadowHover2 : '0 4px 5px rgba(0, 0, 0, 0.08)',
    }
}