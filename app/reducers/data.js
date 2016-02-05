import { createReducer } from '../utils'

const initialState = 'line'

export default createReducer(initialState, {
	CHART_TYPE: (chart, action) => action.data
})
