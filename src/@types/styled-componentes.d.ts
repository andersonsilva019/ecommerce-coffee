import 'styled-components'
import { defaultTheme } from '../styles/theme/default'

type ThemeTypes = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeTypes { }
}