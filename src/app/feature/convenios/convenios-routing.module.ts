import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListConvenioComponent } from './list-convenio/list-convenio.component';
import { ViewConvenioComponent } from './view-convenio/view-convenio.component';

const routes: Routes = [
  {path:'List',component:ListConvenioComponent},
  {path:'View/:id',component:ViewConvenioComponent},
  {path:'**', redirectTo:'/Convenios/List'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConveniosRoutingModule { }
