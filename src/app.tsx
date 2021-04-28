import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import { QueryClient, QueryClientProvider } from 'react-query'
import routes from './helpers/routes'
import RoutesInterface from './helpers/routes/interface'
import theme from './helpers/styles/theme'

const App = (): React.ReactElement => {
  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </>
  )
}

export default App
