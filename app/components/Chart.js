import React, { Component } from 'react'
import D3 from 'd3'

export default class Chart extends Component {
	render() {
		return (
			<div id={this.props.id}></div>
		)
	}
	componentDidMount() {
		let { props } = this
		this.chart = c3.generate({
			bindto: '#' + props.id
		  , ...props
    	})
	}
	componentWillReceiveProps(next) {
		this.chart.load(next.data)
	}
}
