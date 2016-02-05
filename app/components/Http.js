import R from 'ramda'
import React, { Component } from 'react'
import xhr from 'xhr'

export default class Http extends Component {
	render() {
		return null
	}
	shouldComponentUpdate() {
		return false
	}
	componentWillReceiveProps(props) {
		if (R.equals(this.props, props)) return
		console.log('Http.request', props)
		let { onSuccess, onError } = props
		xhr(Object.assign({}, props), function (err, res, body) {
			console.log('Http.response', err, res, body)
			// TODO check res.statusCode
			if (err) return onError && onError(err)
			setTimeout(() =>
				onSuccess && onSuccess(res)
			, 1000)
		})
	}
}
