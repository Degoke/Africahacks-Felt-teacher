import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import routes from './helpers/routes'
import RoutesInterface from './helpers/routes/interface'
import theme from './helpers/styles/theme'
import AxiosProvider from './context/axios'

const App = (): React.ReactElement => {
  return (
    <>
      <AxiosProvider>
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
      </AxiosProvider>
    </>
  )
}

export default App
