import React from 'react'
import ReactDOM from 'react-dom'
import { Router, useRouterHistory, browserHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import reducers from './redux'
import routes from './routes'

injectTapEventPlugin()

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let middleware = composeEnhancers(applyMiddleware(routerMiddleware(browserHistory)))
let store = createStore(reducers, undefined, middleware)
let history = syncHistoryWithStore(browserHistory, store)

function render() {
	ReactDOM.render(
		<MuiThemeProvider>
			<Provider store={store}>
				<Router history={history}>
					{routes}
				</Router>
			</Provider>
		</MuiThemeProvider>
	  , document.getElementById('root')
	)
}

render()

if (module.hot) {
	module.hot.accept('./redux', () => {
		  const nextRootReducer = require('./redux/index').default
		  store.replaceReducer(nextRootReducer)
	})
}
