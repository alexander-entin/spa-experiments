import { connect } from 'react-redux'
import Service from './Service'
import React from 'react'
import {Toolbar} from 'material-ui/Toolbar'
import Context from './Context'
import ChartType from './ChartType'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import data from '../selectors/data'
import chartType from '../selectors/chartType'

let select = (state) => ({
	data: data(state, { serviceId: 'service1' })
  , chartType: chartType(state, { chartId: 'chart1' })
})

export class Page1 extends React.Component {
	render() {
		let { props } = this
		let Chart = { line: LineChart, bar: BarChart }[props.chartType]
		let Series = { line: Line, bar: Bar }[props.chartType]
		return (
			<div className="layout vertical">
				<Service id="service1" />
				<Toolbar>
					<Context/>
					<ChartType chartId="chart1" />
				</Toolbar>
				<div className="layout">
					{ props.data &&
						<ResponsiveContainer width='99%' height='99%'>
							<Chart data={props.data}>
	  							<Series dataKey="apples" fill="#FF0000" stroke="#FF0000" />
	  							<Series dataKey="bananas" fill="#CCCC00" stroke="#CCCC00" />
	  							<Series dataKey="oranges" fill="#FF8800" stroke="#FF8800" />
								<XAxis dataKey="year" />
								<YAxis />
								<Tooltip />
							</Chart>
						</ResponsiveContainer>
					}
				</div>
			</div>
		)
	}
}

export default connect(select)(Page1)
