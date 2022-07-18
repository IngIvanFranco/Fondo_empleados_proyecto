import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeConvenioComponent } from './convenios/home-convenio/home-convenio.component';
import { RuteadorComponent } from './creditos/ruteador/ruteador.component';

import { HomeListComponent } from './servicios/home-list/home-list.component';

const routes: Routes = [
  {path:'Home', loadChildren: () => import('./index/index.module').then(i => i.IndexModule) },
  {path:'Convenios',component:HomeConvenioComponent, loadChildren: () => import('./convenios/convenios.module').then(i => i.ConveniosModule) },
  {path:'Creditos',component:RuteadorComponent, loadChildren: ()=>import('./creditos/creditos.module').then(i => i.CreditosModule)},
  {path:'Quienes-somos', loadChildren: ()=> import('./quienes-somos/quienes-somos.module').then(i => i.QuienesSomosModule)},
  {path:'Servicios',component:HomeListComponent, loadChildren: ()=> import('../feature/servicios/servicios.module').then(i => i.ServiciosModule)}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
