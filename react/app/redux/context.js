import { createActions, createReducer } from '../tools/redux'

const initialState = {
	Americas: true
}

export let actions = createActions([
	'CONTEXT_CHANGE'
])

export default createReducer(initialState, {
	CONTEXT_CHANGE: (state, action) => ({ ...state, ...action.data })
})
