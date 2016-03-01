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
	componentDidMount() {
		this.xhr(this.props)
	}
	componentWillReceiveProps(props) {
		if (!R.equals(this.props.uri, props.uri)) this.xhr(props)
	}
	xhr(props) {
		console.log('Http.request', props)
		let { onSuccess, onError } = props
		xhr(Object.assign({}, props), function (err, res, body) {
			// TODO check res.statusCode
			if (err) return onError && onError(err)
			setTimeout(() => {
				console.log('Http.response', res)
				onSuccess && onSuccess(res)
			}, 2000)
		})
	}
}
