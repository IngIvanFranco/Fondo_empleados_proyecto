import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConveniosRoutingModule } from './convenios-routing.module';
import { HomeConvenioComponent } from './home-convenio/home-convenio.component';
import { ListConvenioComponent } from './list-convenio/list-convenio.component';
import { ViewConvenioComponent } from './view-convenio/view-convenio.component';
import { HttpClientModule } from '@angular/common/http';
import { ConveniosService } from './shared/convenios.service';


@NgModule({
  declarations: [
    HomeConvenioComponent,
    ListConvenioComponent,
    ViewConvenioComponent
  ],
  imports: [
    CommonModule,
    ConveniosRoutingModule,
    HttpClientModule
  ],

  providers: [ ConveniosService]
})
export class ConveniosModule { }
