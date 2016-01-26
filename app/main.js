import R from 'ramda'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import { syncReduxAndRouter } from 'redux-simple-router'
import * as utils from './utils'
import reducers from './reducers/index'
import routes from './routes'

let history = createBrowserHistory()
let store = compose(
	applyMiddleware(/*thunk*/)
  , global.devToolsExtension ? devToolsExtension() : f => f
)(createStore)(reducers)
syncReduxAndRouter(history, store)

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			{routes}
		</Router>
	</Provider>
  , document.getElementById('root')
)

if (module.hot) {
	module.hot.accept('./reducers', () => {
  		const nextRootReducer = require('./reducers/index').default
  		store.replaceReducer(nextRootReducer)
	})
}
