/* eslint-disable import/prefer-default-export */
import '@testing-library/jest-dom'

import React, { ReactElement } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import theme from './helpers/styles/theme'

export const provideTheme = (ui: ReactElement): ReactElement => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </MuiThemeProvider>
  )
}
