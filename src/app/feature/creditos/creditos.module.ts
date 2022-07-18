import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';


import { CreditosRoutingModule } from './creditos-routing.module';
import { CreditosComponent } from './creditos/creditos.component';
import { CreditosService } from './shared/creditos.service';
import { RuteadorComponent } from './ruteador/ruteador.component';
import { ListCreditosComponent } from './list-creditos/list-creditos.component';



@NgModule({
  declarations: [
    CreditosComponent,
    RuteadorComponent,
    ListCreditosComponent,


  ],
  imports: [
    CommonModule,
    CreditosRoutingModule,
    HttpClientModule


  ],
  providers: [ CreditosService,]
})
export class CreditosModule { }
