import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

export const sagaMiddleware = createSagaMiddleware()

const initialState = {}
const enhancers = []
const middleware = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
  const loggerMiddleware = createLogger({ duration: true })

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }

  middleware.push(loggerMiddleware)
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

const store = createStore(rootReducer, initialState, composedEnhancers)

export default store
