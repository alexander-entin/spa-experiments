import React, { Component } from 'react'
import { connect } from 'react-redux'
import controlActions from '../actions/control'
import dataActions from '../actions/data'
import Http from './Http'
import Chart from './Chart'

let select = state => state

function mockChartData() {
	return ['data1', 'data2', 'data3'].map(function(name) {
		var a = [name]
		for (var i = 0; i < 6; i++) {
			a.push(Math.random() * 500)
		}
		return a
	})
}

export class Home extends Component {
	render() {
		let { props } = this
		let types = ['line', 'spline', 'bar', 'step', 'area-step', 'area', 'area-spline', 'pie', 'donut']
		let padding = { padding: 10 }
		let background = { background: '#dddddd' }
		let chart = props.chart.data ? <Chart id="chart" {...props.chart} /> : null

		setTimeout(() => {
			localStorage.html = document.getElementById('root').innerHTML
			localStorage.state = JSON.stringify(props)
		}, 500)

		return (
			<div>
				<Http
					uri={props.data}
					onSuccess={() => props.DATA_LOAD({ data: { columns: mockChartData(), type: props.data }})}
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
