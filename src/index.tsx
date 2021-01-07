import App from 'App'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming'
import React from 'react'
import { render } from 'react-dom'
import { Route, Switch } from 'react-router'
import { theme } from 'theme'
import * as serviceWorker from './serviceWorker'

const Root: React.FC<{ theme: any }> = ({ theme }) => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
)

render(<Root theme={theme} />, document.getElementById('root'))

serviceWorker.unregister()
