import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagemAudienciaPage } from './listagem-audiencia.page';

const routes: Routes = [
  {
    path: '',
    component: ListagemAudienciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagemAudienciaPageRoutingModule {}
