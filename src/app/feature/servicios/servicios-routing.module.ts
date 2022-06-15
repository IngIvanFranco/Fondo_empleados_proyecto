import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicioComponent } from './servicio/servicio.component';

const routes: Routes = [
  {path:':id', component:ServicioComponent},
  {path:'', redirectTo: '/Home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
