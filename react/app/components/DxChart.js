import $ from 'jquery'
import React, { Component } from 'react'
import equals from '../tools/equals'

require('devextreme/viz/chart')

export default class DxChart extends Component {
	render() {
		return (
			<div id={this.props.id} className="layout"></div>
		)
	}
	shouldComponentUpdate() {
		return false
	}
	componentDidMount() {
		this.draw(this.props)
	}
	componentWillReceiveProps(next) {
		if (this.chart && equals(this.props, next)) {
			console.log('DxChart', 'no change')
			return
		}
		this.draw(next)
	}
	draw(props) {
		if (this.chart) {
			this.chart.option({ ...props, animation: true })
			console.log('DxChart', 'updated')
		} else {
			let $chart = $("#" + props.id)
			if (!$chart.dxChart) {
				console.log('DxChart', 'no Dx')
				return
			}
			this.chart = $chart.dxChart({ ...props, animation: true }).dxChart("instance")
			console.log('DxChart', 'rendered')
		}
	}
}
