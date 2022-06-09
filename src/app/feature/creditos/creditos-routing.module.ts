import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditosComponent } from './creditos/creditos.component';

const routes: Routes = [
  {path:':id', component:CreditosComponent},
  {path:'', redirectTo: '/Home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditosRoutingModule { }
