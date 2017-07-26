import React from 'react'
import {ToolbarGroup} from 'material-ui/Toolbar'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import style from '../styles/toolbarControl'
import chartType from '../selectors/chartType'
import { actions } from '../redux/chartType'
import { connect } from 'react-redux'

let select = (state, props) => ({
	chartType: chartType(state, props)
})

export class ChartType extends React.Component {
	render() {
		let { props } = this
		return (
			<ToolbarGroup>
				<RadioButtonGroup
					className="layout"
					style={{ display: 'flex', paddingTop: 5 }}
					name="chart-type"
					defaultSelected={props.chartType}
					onChange={(_, val) => props.CHART_TYPE({ chartId: props.chartId, type: val })}
				>
				    <RadioButton value="line" label="Line" {...{style}} />
				    <RadioButton value="bar"  label="Bar"  {...{style}} />
			    </RadioButtonGroup>
			</ToolbarGroup>

		)
	}
}

export default connect(select, actions)(ChartType)
