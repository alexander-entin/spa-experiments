import { Component } from '@angular/core';

@Component({
	selector: 'Context',
	template: `
		<md-checkbox *ngFor="let name of checkboxes" class="control">
			{{name}}
		</md-checkbox>
	`
})
export default class Context {
	checkboxes = ['Americas', 'Asia', 'Europe']
}
