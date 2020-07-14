import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagemTipoResponsavelPage } from './listagem-tipo-responsavel.page';

const routes: Routes = [
  {
    path: '',
    component: ListagemTipoResponsavelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagemTipoResponsavelPageRoutingModule {}
