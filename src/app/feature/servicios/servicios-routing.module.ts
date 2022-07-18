import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListahorroComponent } from './listahorro/listahorro.component';
import { ServicioComponent } from './servicio/servicio.component';

const routes: Routes = [
  {path:'servicio/:id', component:ServicioComponent},
  {path:'List', component:ListahorroComponent},
  {path:'**', redirectTo:'/Servicios/List'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
