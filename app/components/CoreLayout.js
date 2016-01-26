import React from 'react'
import '../styles/core.css'

export default o => (
	<div className='page-container layout'>
		<div className='view-container layout'>
			{o.children}
		</div>
	</div>
)
