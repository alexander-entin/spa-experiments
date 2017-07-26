import { combineReducers } from '../tools/redux'
import { routerReducer as routing } from 'react-router-redux'
import context from './context'
import data from './data'
import chartType from './chartType'

export default combineReducers({
	chartType
  , context
  , data
  , routing
})
