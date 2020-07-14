import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoResponsavelPage } from './tipo-responsavel.page';

const routes: Routes = [
  {
    path: '',
    component: TipoResponsavelPage
  },
  {
    path: 'listagem-tipo-responsavel',
    loadChildren: () => import('./listagem-tipo-responsavel/listagem-tipo-responsavel.module').then( m => m.ListagemTipoResponsavelPageModule)
  },
  {
    path: 'tipo-edicao',
    loadChildren: () => import('./tipo-edicao/tipo-edicao.module').then( m => m.TipoEdicaoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoResponsavelPageRoutingModule {}
