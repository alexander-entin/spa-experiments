import { createSelector } from 'reselect'
import data from './data'
import chartType from './chartType'

let settings = {
	commonSeriesSettings: {
		argumentField: 'year'
	}
  , series: [
		  {
			valueField: "apples"
		  , name: 'Apples'
		}
	  , {
			valueField: "bananas"
		  , name: 'Bananas'
		}
	  , {
			valueField: "oranges"
		  , name: 'Oranges'
		}
	]
}

export default createSelector([data, chartType], (data, chartType) => {
	console.log('dxData')
	return data && {
		...settings
	  , dataSource: data
	  , commonSeriesSettings: {
	  		...settings.commonSeriesSettings
	  	  , type: chartType
	  	}
	}
})
