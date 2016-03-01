import { createReducer } from '../utils'

const initialState = {}

export default createReducer(initialState, {
	DATA_LOAD: (chart, action) => action.data
})
