import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagemResponsavelPage } from './listagem-responsavel.page';

const routes: Routes = [
  {
    path: '',
    component: ListagemResponsavelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagemResponsavelPageRoutingModule {}
