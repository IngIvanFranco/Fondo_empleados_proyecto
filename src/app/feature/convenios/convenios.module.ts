import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConveniosRoutingModule } from './convenios-routing.module';
import { HomeConvenioComponent } from './home-convenio/home-convenio.component';
import { ListConvenioComponent } from './list-convenio/list-convenio.component';
import { ViewConvenioComponent } from './view-convenio/view-convenio.component';


@NgModule({
  declarations: [
    HomeConvenioComponent,
    ListConvenioComponent,
    ViewConvenioComponent
  ],
  imports: [
    CommonModule,
    ConveniosRoutingModule
  ]
})
export class ConveniosModule { }
