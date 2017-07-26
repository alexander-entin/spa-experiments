import { connect } from 'react-redux'
import Service from './Service'
import React from 'react'
import {Toolbar} from 'material-ui/Toolbar'
import Context from './Context'
import ChartType from './ChartType'
import Chart from './DxChart'
import data from '../selectors/dxData'

let select = (state) => ({
	data: data(state, { chartId: 'chart2', serviceId: 'service2' })
})

export class Page2 extends React.Component {
	render() {
		let { props } = this
		return (
			<div className="layout vertical">
				<Service id="service2" />
				<Toolbar>
					<Context/>
					<ChartType chartId="chart2" />
				</Toolbar>
				<div className="layout">
					{ props.data &&
						<Chart id="chart" {...props.data} />
					}
				</div>
			</div>
		)
	}
}

export default connect(select)(Page2)
