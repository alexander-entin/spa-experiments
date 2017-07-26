import { connect } from 'react-redux'
import Service from './Service'
import React from 'react'
import {Toolbar} from 'material-ui/Toolbar'
import Context from './Context'
import ChartType from './ChartType'
import data from '../selectors/googleData'
import chartType from '../selectors/chartType'

let select = (state) => ({
	data: data(state, { serviceId: 'service3' })
  , chartType: chartType(state, { chartId: 'chart3' })
})

export class Page3 extends React.Component {
	render() {
		let { props } = this
		return (
			<div className="layout vertical">
				<Service id="service3" />
				<Toolbar>
					<Context/>
					<ChartType chartId="chart3" />
				</Toolbar>
				{ props.data &&
					<google-chart
						type={props.chartType}
						data={props.data}
						style={{ width: '100%', height: '85%' }}
					/>
				}
			</div>
		)
	}
}

export default connect(select)(Page3)
