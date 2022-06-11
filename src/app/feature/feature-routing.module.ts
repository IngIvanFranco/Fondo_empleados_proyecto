import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeConvenioComponent } from './convenios/home-convenio/home-convenio.component';

const routes: Routes = [
  {path:'Home', loadChildren: () => import('./index/index.module').then(i => i.IndexModule) },
  {path:'Convenios',component:HomeConvenioComponent, loadChildren: () => import('./convenios/convenios.module').then(i => i.ConveniosModule) },
  {path:'Creditos', loadChildren: ()=>import('./creditos/creditos.module').then(i => i.CreditosModule)},
  {path:'Quienes-somos', loadChildren: ()=> import('./quienes-somos/quienes-somos.module').then(i => i.QuienesSomosModule)}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
