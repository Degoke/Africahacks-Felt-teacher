import {
  createMuiTheme,
  responsiveFontSizes,
  Theme,
} from '@material-ui/core/styles'

const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5E5DBA',
    },
    secondary: {
      main: '#E6E6E8',
    },
    text: {
      primary: '#000000',
      secondary: '#E6E6E8',
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

export default responsiveFontSizes(theme)
