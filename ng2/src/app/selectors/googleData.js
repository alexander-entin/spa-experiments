import { createSelector } from 'reselect'
import data from './data'

export default createSelector(data, data => {
	if (!data) return
	let cols = [
		{ label: 'Year', type: 'string' }
	  , { label: 'Apples', type: 'number' }
	  , { label: 'Bananas', type: 'number' }
	  , { label: 'Oranges', type: 'number' }
	]
	let rows = data.map(x => [x.year, x.apples, x.bananas, x.oranges])
	let res = [cols].concat(rows)
	console.log('googleData', res)
	return JSON.stringify(res)
})
