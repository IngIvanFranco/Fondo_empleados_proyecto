import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';


import { CreditosRoutingModule } from './creditos-routing.module';
import { CreditosComponent } from './creditos/creditos.component';
import { CreditosService } from './shared/creditos.service';


@NgModule({
  declarations: [
    CreditosComponent,

  ],
  imports: [
    CommonModule,
    CreditosRoutingModule,
    HttpClientModule


  ],
  providers: [ CreditosService,]
})
export class CreditosModule { }
