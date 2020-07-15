import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagemNaturezaJuridicaPage } from './listagem-natureza-juridica.page';

const routes: Routes = [
  {
    path: '',
    component: ListagemNaturezaJuridicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagemNaturezaJuridicaPageRoutingModule {}
