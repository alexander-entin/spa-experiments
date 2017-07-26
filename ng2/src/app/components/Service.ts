let baseApiUrl = 'https://httpbin.org/delay/1#'

import { Component } from '@angular/core'

@Component({
	selector: 'Service',
	template: `
		<Http
			url={baseApiUrl + id + '?' + JSON.stringify(context)}
			onSuccess={(data) => props.DATA_LOAD({ serviceId: props.id, data })}
		/>
	`
})
export default class Service {
	baseApiUrl = 'https://httpbin.org/delay/1#'
}
