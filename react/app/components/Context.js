import React from 'react'
import {ToolbarGroup} from 'material-ui/Toolbar'
import Checkbox from 'material-ui/Checkbox';
import style from '../styles/toolbarControl'
import { connect } from 'react-redux'
import context from '../selectors/context'
import { actions } from '../redux/context'

let select = (state) => ({
	context: context(state)
})

let checkboxes = ['Americas', 'Asia', 'Europe']

export class Context extends React.Component {
	render() {
		let { props } = this
		return (
			<ToolbarGroup firstChild={true}>
				{checkboxes.map(name => (
					<Checkbox
						key={name}
						label={name}
						checked={props.context[name]}
						{...{style}}
						onCheck={(_, val) => props.CONTEXT_CHANGE({ [name]: val })}
					/>
				))}
			</ToolbarGroup>
		)
	}
}

export default connect(select, actions)(Context)
