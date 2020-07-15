import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NaturezaTextoJuridicoPage } from './natureza-texto-juridico.page';

const routes: Routes = [
  {
    path: '',
    component: NaturezaTextoJuridicoPage
  },
  {
    path: 'listagem-natureza-juridica',
    loadChildren: () => import('./listagem-natureza-juridica/listagem-natureza-juridica.module').then( m => m.ListagemNaturezaJuridicaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NaturezaTextoJuridicoPageRoutingModule {}
