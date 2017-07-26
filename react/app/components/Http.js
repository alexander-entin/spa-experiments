import React from 'react'

export default class Http extends React.Component {
    render() {
		return null
	}
	shouldComponentUpdate() {
		return false
	}
    componentWillMount () {
        this.doRequest(this.props)
    }
	componentWillReceiveProps(props) {
		if (JSON.stringify(props) === JSON.stringify(this.props)) return
        this.doRequest(props)
	}
    doRequest(props) {
        let { method, url, headers, data, onSuccess, onError } = props

    	setTimeout(() => onSuccess(true), 0)
    	return

        console.log('Http request', props)
		let request = new XMLHttpRequest()

		if (this.xhrRequest) {
			this.xhrRequest.abort()
		}
		this.xhrRequest = request
		request.open(method || 'GET', url, /* async: */ true)
		Object.keys(headers || {}).forEach(key => request.setRequestHeader(key, headers[key]))
		request.send(data)

		request.onload = function() {
        	console.log('Http response', request)
		  	if (request.status >= 200 && request.status < 400) {
		    	if (onSuccess) onSuccess(request.responseText)
		  	} else {
		    	// We reached our target server, but it returned an error
		    	if (onError) onError(request)
		  	}
		}

		request.onerror = function(e) {
			// There was a connection error of some sort
	    	if (onError) onError(e)
		}
    }
}
