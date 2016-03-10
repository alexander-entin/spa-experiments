import React, { Component } from 'react'
import { connect } from 'react-redux'
import controlActions from '../actions/control'
import dataActions from '../actions/data'
import Http from './Http'
import Chart from './DxChart'

let select = state => state

function mockChartData() {
	var a = []
	for (var i = 0; i < 11; i++) {
		a.push({
			year: 2000 + i + ''
		  , apples: Math.random() * 500
		  , bananas: Math.random() * 500
		  , oranges: Math.random() * 500
		})
	}
	return a
}

export class Home extends Component {
	render() {
		let { props } = this
		let types = ['line', 'spline', 'area', 'bar', 'fullStackedLine', 'fullStackedArea', 'fullStackedBar']
		let padding = { padding: 10 }
		let background = { background: '#dddddd' }
		let chart = props.chart.dataSource ? <Chart id="chart" {...props.chart} /> : null

		setTimeout(() => {
			localStorage.html = document.getElementById('root').innerHTML
			localStorage.state = JSON.stringify(props)
		}, 1100)

		return (
			<div>
				<Http
					url={'https://httpbin.org/delay/0.1#' + props.data}
					onSuccess={() => props.DATA_LOAD({ data: mockChartData(), type: props.data })}
				/>
				<div style={{...padding, ...background}}>
					{types.map((x) => (
						<label key={x} style={padding}>
							<input type="radio" name="chart-type"
								id={x}
								value={x}
								checked={x === props.data}
								onChange={() => props.CHART_TYPE(x)}
							/>
							{x}
						</label>
					))}
				</div>
				{chart}
			</div>
		)
	}
}

export default connect(select, { ...controlActions, ...dataActions })(Home)
