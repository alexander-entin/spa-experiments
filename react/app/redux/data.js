import { createActions, createReducer } from '../tools/redux'

const initialState = {}

export let actions = createActions([
	'DATA_LOAD'
])

export default createReducer(initialState, {
	DATA_LOAD: (state, action) => ({ ...state, [action.data.serviceId]: action.data.data })
  , CONTEXT_CHANGE: () => ({})
  , '@@router/LOCATION_CHANGE': (state, action, megaState) => {
  		let prev = megaState.routing.locationBeforeTransitions || {}
		return action.payload.pathname == prev.pathname	? state	: {}
	}
})
