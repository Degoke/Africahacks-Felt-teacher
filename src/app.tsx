import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Routes from './config/routes'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

const App: React.FC = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#5E5DBA',
      },
      secondary: {
        main: '#E6E6E8',
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
      fontFamily: "'Montserrat', sans-serif",
      allVariants: {
        color: '#5E5DBA',
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          {Routes.map((route, index) => {
            return (
              <Route
                key={index}
                exact
                path={route.path}
                component={route.component}
              ></Route>
            )
          })}
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
