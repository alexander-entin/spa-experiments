import React, { Component } from 'react'
import equals from '../tools/equals'
import xhr from 'xhr'

export default class Http extends Component {
	render() {
		return null
	}
	shouldComponentUpdate() {
		return false
	}
	componentDidMount() {
		this.xhr(this.props)
	}
	componentWillReceiveProps(props) {
		if (!equals(this.props, props)) this.xhr(props)
	}
	xhr(props) {
		console.log('Http.request', props)
		let { onSuccess, onError } = props
		xhr(Object.assign({}, props), function (err, res, body) {
			// TODO check res.statusCode
			console.log('Http.response', err, res)
			if (err) return onError && onError(err)
			onSuccess && onSuccess(res)
		})
	}
}
