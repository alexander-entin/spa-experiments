import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import Page1 from './components/Page1'
//import Page2 from './components/Page2'
//import Page3 from './components/Page3'

const routes: Routes = [
  { path: '', redirectTo: '/ng', pathMatch: 'full' },
  { path: 'ng', component: Page1 },
  { path: 'dx', component: Page1 },
  { path: 'wc', component: Page1 }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}
