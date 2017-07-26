import '../styles/core.css'
import React from 'react'
import AppBar from 'material-ui/AppBar'
import Menu from './Menu'

export default class CoreLayout extends React.Component {
	render() {
		return (
			<div className="layout">
				<Menu />
				<div className="layout vertical">
					<AppBar title="React App" />
					{props.children}
				</div>
			</div>
		)
	}
}
