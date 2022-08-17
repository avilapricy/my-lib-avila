// styled.d.ts
import 'styled-components';

//colors
interface IColor10 {
    1: string
    2: string
    3: string
    4: string
    5: string
    6: string
    7: string
    8: string
    9: string
    10: string
  }
  
interface IColor {
    primary: IColor10
}

export type ColorTypes =
    "primary/1" | "primary/2" | "primary/3" | 
    "primary/4" | "primary/5" | "primary/6" | 
    "primary/7" | "primary/8" | "primary/9" | "primary/10" 

//typography
type TypographyTypes =
  "h1" |
  "h2" |
  "h3" |
  "h4" |
  "p1" |
  "p2" |
  "p3" |
  "s1" |
  "s2" |
  "c1"

interface ITypography {
  "h1": string
  "h2": string
  "h3": string
  "h4": string
  "p1": string
  "p2": string
  "p3": string
  "s1": string
  "s2": string
  "c1": string
}

declare module 'styled-components' {

    export interface DefaultTheme {
      colors: IColor
      typography: ITypography
    }
}