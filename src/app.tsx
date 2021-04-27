import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import routes from './helpers/routes'
import RoutesInterface from './helpers/routes/interface'
import theme from './helpers/styles/theme'

const App = (): React.ReactElement => {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Suspense fallback={<h1>loading...</h1>} />
            <Switch>
              {routes.map((route: RoutesInterface) => {
                return (
                  <Route
                    key={route.name}
                    exact
                    path={route.path}
                    component={route.component}
                  />
                )
              })}
            </Switch>
          </Router>
        </ThemeProvider>
      </MuiThemeProvider>
    </>
  )
}

export default App
