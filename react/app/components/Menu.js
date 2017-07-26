import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Subheader from 'material-ui/Subheader'
import { Link } from 'react-router'
import activeStyle from '../styles/activeRoute'

export default class Menu extends React.Component {
	render() {
		let { props } = this
		return (
			<Drawer open={true} containerStyle={{ position: 'relative' }}>
				<Subheader>Menu</Subheader>
		        <Link to="/react" {...{activeStyle}}><MenuItem primaryText="1 - React Chart"        /></Link>
		        <Link to="/dx"    {...{activeStyle}}><MenuItem primaryText="2 - Dx Chart"           /></Link>
		        <Link to="/wc"    {...{activeStyle}}><MenuItem primaryText="3 - WebComponent Chart" /></Link>
			</Drawer>
		)
	}
}
