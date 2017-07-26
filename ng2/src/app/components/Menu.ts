import { Component } from '@angular/core';

@Component({
	selector: 'Menu',
	template: `
		<md-nav-list>
			<h3 md-subheader>Menu</h3>
   			<a md-list-item routerLink="/ng" routerLinkActive="active">
   				1 - Angular2 Chart
   			</a>
   			<a md-list-item routerLink="/dx" routerLinkActive="active">
   				2 - Dx Chart
   			</a>
   			<a md-list-item routerLink="/wc" routerLinkActive="active">
   				3 - WebComponent Chart
   			</a>
		</md-nav-list>
	 `
})
export default class Menu {}
