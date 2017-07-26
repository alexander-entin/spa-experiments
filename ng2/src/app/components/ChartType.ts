import { Component } from '@angular/core'

@Component({
	selector: 'ChartType',
	template: `
		<md-radio-group
			class="layout"
			name="chart-type"
		>
			<md-radio-button class="control" value="line">
				Line
			</md-radio-button>
			<md-radio-button class="control" value="bar">
				Bar
			</md-radio-button>
		</md-radio-group>
	`
})
export default class ChartType {}
