import R from 'ramda'
import React from 'react'
import { connect } from 'react-redux'
import PouchSync from './PouchSync'
import PouchRedux from './PouchRedux'
import tracksActions from '../actions/tracks'

let root = 'http://db.raceqs.com/'

export let DB = (o) => {
	return (
		<div>
			<PouchSync db1="tracks" db2={root+"tracks"} />
			<PouchRedux
				db      ="tracks"
				data    ={o.tracks}
				onLoad  ={o.TRACKS_LOAD}
				onInsert={o.TRACKS_INSERT}
				onUpdate={o.TRACKS_UPDATE}
				onDelete={o.TRACKS_DELETE}
			/>
		</div>
	)
}

export default connect(R.identity, tracksActions)(DB)
