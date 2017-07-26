import { Component } from '@angular/core';

@Component({
	selector: 'CoreLayout',
	template: `
		<md-sidenav-container class="layout">
			<md-sidenav mode="side" opened="true">
				<Menu></Menu>
			</md-sidenav>
			<div className="layout vertical">
				<md-toolbar color="primary">
					Angular2 App
				</md-toolbar>
				<router-outlet></router-outlet>
			</div>
		</md-sidenav-container>
   `
})
export default class CoreLayout {}
