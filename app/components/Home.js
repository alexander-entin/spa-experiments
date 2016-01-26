import React, { Component } from 'react'
import { connect } from 'react-redux'
import controlActions from '../actions/control'
import Chart from './Chart'

let select = (state) => state.chart

export class Home extends Component {
	render() {
		let { props } = this
		let types = ['line', 'spline', 'bar', 'step', 'area-step', 'area', 'area-spline', 'pie', 'donut']
		let padding = { padding: 10 }
		let background = { background: '#dddddd' }
		return (
			<div>
				<div style={{...padding, ...background}}>
					{types.map((x) => (
						<label key={x} style={padding}>
							<input type="radio" name="site_name"
								id={x}
								value={x}
								checked={x === props.data.type}
								onChange={() => props.CHART_TYPE(x)}
							/>
							{x}
						</label>
					))}
				</div>
				<Chart id="chart" {...this.props} />
			</div>
		)
	}
}

export default connect(select, controlActions)(Home)
