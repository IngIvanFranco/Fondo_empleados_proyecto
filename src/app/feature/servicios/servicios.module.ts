import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServicioComponent } from './servicio/servicio.component';
import { ServiciosService } from './shared/servicios.service';


@NgModule({
  declarations: [
    ServicioComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    HttpClientModule
  ],
  providers: [ ServiciosService,]
})
export class ServiciosModule { }
