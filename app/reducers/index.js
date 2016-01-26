import R from 'ramda'
import { combineReducers } from '../utils'
import { routeReducer } from 'redux-simple-router'
import chart from './chart'

export default combineReducers({
	chart
  , routing: routeReducer
})
