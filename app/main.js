//import $ from 'jquery'
//import R from 'ramda'
//import _ from 'lodash'
//import moment from 'moment'
//import I from 'immutable'
import './tools/polyfills'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import { syncReduxAndRouter } from 'redux-simple-router'
import reducers from './reducers/index'
import routes from './routes'

let state = localStorage.state
if (state) state = JSON.parse(state)
let history = createBrowserHistory()
let store = compose(
	applyMiddleware(/*thunk*/)
  , global.devToolsExtension ? devToolsExtension() : f => f
)(createStore)(reducers, { data: state.data })

syncReduxAndRouter(history, store)

function render() {
	ReactDOM.render(
		<Provider store={store}>
			<Router history={history}>
				{routes}
			</Router>
		</Provider>
	  , document.getElementById('root')
	)
}

render()

global.render = render

if (module.hot) {
	module.hot.accept('./reducers', () => {
		  const nextRootReducer = require('./reducers/index').default
		  store.replaceReducer(nextRootReducer)
	})
}

//global.jQuery = $
