import R from 'ramda'
import React, { Component } from 'react'
import PouchDB from 'pouchdb'

// if (DEBUG) PouchDB.debug.enable('*')

export default class PouchRedux extends Component {
	log(src, ...rest) {
		console.log('PouchRedux(' + this.props.db + ').' + src, ...rest)
	}
    componentWillMount() {
    	// this.log('componentWillMount')
    	this.init(this.props)
  	}
  	render() {
  		return null
  	}
  	componentWillReceiveProps(nextProps) {
    	// this.log('componentWillReceiveProps', nextProps.data)
  		let { props } = this
  		if (nextProps.db == props.db) {
	  		this.internalChange(nextProps.data)
  		} else {
  			this.cleanup()
  			this.init(nextProps)
  		}
  	}
  	shouldComponentUpdate(nextProps) {
    	// this.log('shouldComponentUpdate', nextProps.data, !R.equals(this.props.data, nextProps.data), this.props.data != nextProps.data)
  		return this.props.data != nextProps.data
  	}
  	componentWillUnmount() {
    	// this.log('componentWillUnmount')
  		this.cleanup()
  	}
	init(props) {
    	this.log('init')
    	this.data = {}
    	this.db = new PouchDB(props.db)

    	// initial load
    	if (props.onLoad) {
    		let extract = R.pipe(R.prop('rows'), R.pluck('doc'))
    		let transform = R.indexBy(R.prop('_id'))
	    	this.db.allDocs({ include_docs: true })
	    	.then(x => {
	    		x = extract(x)
	    		this.data = transform(x)
	    		props.onLoad(R.is(Array, props.data) ? x : this.data)
	    	})
	  		.catch(R.partial(::console.error, ['PouchRedux', props.db]))
    	}

    	this.dbChanges = this.db.changes({ live: true, since: 'now', include_docs: true })
    	.on('change', ::this.externalChange)
		.on('error' , o => this.log('changes', 'ERROR', o))
	}
	internalChange(next) {
    	// this.log('internalChange', next)
		let { db, data } = this
		let deleted = Object.assign({}, data)
		R.map(o => {
			let id = o._id
			delete deleted[id]
			if (data[id] !== o) {
				let omit = R.omit(['_rev'])
				if (!R.equals(omit(data[id]), omit(o))) {
			    	this.log('internalChange', 'PUT', o)
					db.put(o)
					.then((o) => this.log('internalChange', 'PUT.DONE', o))
					.catch((o) => this.log('internalChange', 'PUT.ERR', o))
				}
				data[id] = o
			}
		}, next)
		R.map(o => {
			delete data[o._id]
			o._deleted = true
	    	this.log('internalChange', 'DEL', o)
			db.put(o)
			.then((o) => this.log('internalChange', 'DEL.DONE', o))
			.catch((o) => this.log('internalChange', 'DEL.ERR', o))
		}, deleted)
	}
	externalChange(change) {
    	// this.log('externalChange', change)
		let { onInsert, onUpdate, onDelete } = this.props
	    if (change.deleted) {
	    	let id = change.id
	    	if (this.data[id]) {
    			this.log('externalChange', 'DEL', id)
		      	delete this.data[id]
		      	onDelete && onDelete(id)
	    	}
	    } else { // updated/inserted
	    	let doc = change.doc
	    	let id 	= doc._id
	    	let notify = this.data[id] ? onUpdate : onInsert
			this.log('externalChange', this.data[id] ? 'PUT' : 'POST', doc)
	    	this.data[id] = doc
	    	notify && notify(doc)
	    }
	}
	cleanup() {
    	this.log('cleanup')
		this.dbChanges.cancel()
	}
}
