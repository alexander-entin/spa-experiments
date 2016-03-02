import React, { Component } from 'react'
import R from 'ramda'

export default class Chart extends Component {
	render() {
		return (
			<div id={this.props.id}></div>
		)
	}
	shouldComponentUpdate() {
		return false
	}
	componentDidMount() {
		this.draw(this.props)
	}
	componentWillReceiveProps(next) {
		if (this.chart && R.equals(this.props, next)) {
			console.log('no change')
			return
		}
		this.draw(next)
	}
	draw(props) {
		if (this.chart) {
			this.chart.option({ ...props, animation: true })
			console.log('updated')
		} else {
			let $chart = $("#" + props.id)
			if (!$chart.dxChart) {
				console.log('no Dx')
				return
			}
			this.chart = $chart.dxChart({ ...props, animation: true }).dxChart("instance")
			console.log('rendered')
		}
	}
}
