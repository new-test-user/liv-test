import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import store, { sagaMiddleware } from 'redux/store'
import rootSaga from 'redux/sagas'

import { ThemeProvider } from 'styled-components'
import * as theme from 'theme'
import { GlobalStyles } from 'theme/GlobalStyles'

import { Routes } from 'routes'

import Alert from 'react-s-alert'
import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/slide.css'

sagaMiddleware.run(rootSaga)

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <Alert stack={{ limit: 3 }} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
