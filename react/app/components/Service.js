import React from 'react'
import Http from './Http'
import context from '../selectors/context'
import { actions } from '../redux/data'
import { connect } from 'react-redux'

let baseApiUrl = 'https://httpbin.org/delay/1#'

let select = (state) => ({
	context: context(state)
})

export class Service extends React.Component {
	render() {
		let { props } = this
		return (
			<Http
				url={baseApiUrl + props.id + '?' + JSON.stringify(props.context)}
				onSuccess={(data) => props.DATA_LOAD({ serviceId: props.id, data })}
			/>
		)
	}
}

export default connect(select, actions)(Service)
