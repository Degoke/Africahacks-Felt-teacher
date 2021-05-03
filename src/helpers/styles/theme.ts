import { createMuiTheme, Theme } from '@material-ui/core/styles'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

const breakpoints = createBreakpoints({})

const theme: Theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          overflowX: 'hidden',
          fontSize: '16px',
          [breakpoints.down('sm')]: {
            fontSize: '12px',
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#5E5DBA',
    },
    secondary: {
      light: '#E6E6E8',
      main: '#000000',
    },
    text: {
      primary: '#000000',
      secondary: '#FDB827',
    },
    background: {
      default: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    allVariants: {
      color: '#5E5DBA',
    },
  },
})

export default theme
