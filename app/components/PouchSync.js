import R from 'ramda'
import React, { Component } from 'react'
import PouchDB from 'pouchdb'

// if (DEBUG) PouchDB.debug.enable('*')

export default class PouchSync extends Component {
	log(src, ...rest) {
		console.log('PouchSync(' + this.props.db1 + ').' + src, ...rest)
	}
    componentWillMount() {
    	// this.log('componentWillMount')
    	this.init(this.props)
  	}
  	render() {
  		return null
  	}
  	componentWillReceiveProps(nextProps) {
    	// this.log('componentWillReceiveProps')
    	if (this.props.db1 !== nextProps.db1) {
    		this.cleanup()
			this.init(nextProps)
    	}
  	}
  	componentWillUnmount() {
    	// this.log('componentWillUnmount')
  		this.cleanup()
  	}
	init(props) {
    	this.log('init', props)
    	let { db1, db2 } = props
		let log = ::this.log
		this.sync = PouchDB.sync(db1, db2, { live: true, retry: true })
		.on('active'  , o => log('active'  , o))
		.on('change'  , o => log('change'  , o))
		.on('denied'  , o => log('denied'  , o))
		// .on('paused'  , o => log('paused'  , o))
		.on('complete', o => log('complete', o))
		.on('error'   , o => console.error('PouchSync(' + db1 + ')', o))
	}
	cleanup() {
    	this.log('cleanup')
		this.sync.cancel()
	}
}
