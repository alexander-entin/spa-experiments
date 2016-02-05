import React, { Component } from 'react'
import { connect } from 'react-redux'
import controlActions from '../actions/control'
import dataActions from '../actions/data'
import Http from './Http'
import Chart from './Chart'

let select = (state) => state // ({ chart: state.chart, data: state.data })

export class Home extends Component {
	render() {
		let { props } = this
		let types = ['line', 'spline', 'bar', 'step', 'area-step', 'area', 'area-spline', 'pie', 'donut']
		let padding = { padding: 10 }
		let background = { background: '#dddddd' }
		return (
			<div>
				<Http
					uri={props.data}
					onSuccess={props.DATA_LOAD}
				/>
				<div style={{...padding, ...background}}>
					{types.map((x) => (
						<label key={x} style={padding}>
							<input type="radio" name="chart-type"
								id={x}
								value={x}
								checked={x === props.chart.data.type}
								onChange={() => {
									return props.CHART_TYPE(x)
								}}
							/>
							{x}
						</label>
					))}
				</div>
				<Chart id="chart" {...props.chart} />
			</div>
		)
	}
}

export default connect(select, { ...controlActions, ...dataActions })(Home)
