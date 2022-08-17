import { DefaultTheme } from 'styled-components'
import { ColorTypes } from "./styled";

export const defaultTheme: DefaultTheme = {
    typography: {
        h1: "30px",
        h2: "24px",
        h3: "20px",
        h4: "18px",
        p1: "16px",
        p2: "15px",
        p3: "14px",
        s1: "12px",
        s2: "10px",
        c1: "9px"
    },
    colors: {
        primary: {
            "1": "#B9C2C4",
            "2": "#ADB5B8",
            "3": "#A1A8AB",
            "4": "#959B9E",
            "5": "#898E91",
            "6": "#6A7A84",
            "7": "#47555E",
            "8": "#273138",
            "9": "#0C0F12",
            "10": "#000000"
        }
}}

export function getColorByName(name: ColorTypes): string {
    let splitedName = name.split("/");
    //@ts-ignore
    return defaultTheme.colors[splitedName[0].toLowerCase()][splitedName[1]];
}

export function getColorAscendentByName(name: ColorTypes): string {
    let splitedName = name.split("/");
    //@ts-ignore
    return defaultTheme.colors[splitedName[0].toLowerCase()][parseInt(splitedName[1]) - 1];
}