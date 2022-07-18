import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditosComponent } from './creditos/creditos.component';
import { ListCreditosComponent } from './list-creditos/list-creditos.component';

const routes: Routes = [
  {path:'credito/:id', component:CreditosComponent},
  {path:'List', component:ListCreditosComponent},
  {path:'**', redirectTo:'/Creditos/List'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditosRoutingModule { }
