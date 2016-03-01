import { createReducer } from '../utils'

const initialState =  {
	commonSeriesSettings: {
		argumentField: 'year'
	}
  , series: [
  		{
			valueField: "apples"
		  , name: 'Apples'
		  , color: 'red'
		}
	  , {
			valueField: "bananas"
		  , name: 'Bananas'
		  , color: 'yellow'
		}
	  , {
			valueField: "oranges"
		  , name: 'Oranges'
		  , color: 'orange'
		}
	]
}

export default createReducer(initialState, {
	DATA_LOAD: (chart, action) => ({
		...chart
	  , dataSource: action.data.data
	  , commonSeriesSettings: { ...chart.commonSeriesSettings, type: action.data.type }
	})
})
