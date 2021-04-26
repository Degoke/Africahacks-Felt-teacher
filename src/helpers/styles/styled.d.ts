import 'styled-components'
import { Theme } from '@material-ui/core/styles'

export interface ColorInterface {
  main: string
}

export interface TextInterface {
  primary: string
  secondary: string
}

export interface BackgroundInterface {
  default: string
}

export interface Paletteinterface {
  primary: ColorInterface
  secondary: ColorInterface
  text: TextInterface
  background: BackgroundInterface
}

export interface TypographyInterface {
  fontFamily?: string
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    palette: Paletteinterface
    typography: TypographyInterface
  }
}
