import { createActions, createReducer } from '../tools/redux'

const initialState = {}

export let actions = createActions([
	'CHART_TYPE'
])

export default createReducer(initialState, {
	CHART_TYPE: (state, action) => ({ ...state, [action.data.chartId]: action.data.type })
})
