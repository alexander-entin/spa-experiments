import { Component } from '@angular/core';

@Component({
	selector: 'Page1',
	template: `
		<md-toolbar>
			<Context></Context>
			<span class="space"></span>
			<ChartType></ChartType>
		</md-toolbar>
	`
})
export default class Page1 {}
