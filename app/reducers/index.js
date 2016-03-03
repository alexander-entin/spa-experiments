import { combineReducers } from '../tools/redux'
import { routeReducer } from 'redux-simple-router'
import data from './data'
import chart from './chart'

export default combineReducers({
	routing: routeReducer
  , data
  , chart
})
