import R from 'ramda'
import { combineReducers } from '../utils'
import { routeReducer } from 'redux-simple-router'
import effects from './effects'
import data from './data'
import chart from './chart'

export default combineReducers({
	routing: routeReducer
  , effects
  , data
  , chart
})
