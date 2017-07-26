import React from 'react'
import { Route, IndexRedirect } from 'react-router'
import CoreLayout from './components/CoreLayout'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'

export default (
  	<Route path="/" component={CoreLayout}>
    	<IndexRedirect to="react" />
    	<Route path="react" component={Page1} />
    	<Route path="dx"    component={Page2} />
    	<Route path="wc"    component={Page3} />
  	</Route>
)
