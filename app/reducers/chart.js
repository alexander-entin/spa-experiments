import { createReducer } from '../utils'

const initialState = {
	data: {
	    columns: [
	        ['data1', 30, 200, 100, 400, 150, 250]
	      , ['data2', 130, 100, 140, 200, 150, 50]
	      , ['data3', 80, 10, 240, 100, 100, 100]
	    ]
	  , type: 'line'
	}
}

export default createReducer(initialState, {
	CHART_TYPE: (chart, action) => ({ ...chart, data: { ...chart.data, type: action.data } })
})
