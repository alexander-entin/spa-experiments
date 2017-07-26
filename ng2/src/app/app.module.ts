import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material'

import { RoutingModule } from './routing.module';
import Http from './components/Http';
import Service from './components/Service';
import CoreLayout from './components/CoreLayout';
import Menu from './components/Menu';
import Context from './components/Context';
import ChartType from './components/ChartType';
import Page1 from './components/Page1';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RoutingModule
  ],
  declarations: [
    CoreLayout,
    Menu,
    Context,
    ChartType,
    Page1,
  ],
  providers: [],
  bootstrap: [CoreLayout]
})
export class AppModule {}
