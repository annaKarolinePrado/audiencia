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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoResponsavelPageRoutingModule {}
