import React from 'react'
import { Route, IndexRoute } from 'react-router'
import CoreLayout from './components/CoreLayout'
import Home from './components/Home'
import Settings from './components/Settings'

export default (
  	<Route          component={CoreLayout} path='/'>
    	<IndexRoute component={Home} />
    	<Route      component={Settings}   path='/settings' />
  	</Route>
)
