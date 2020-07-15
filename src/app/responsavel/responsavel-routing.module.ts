import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResponsavelPage } from './responsavel.page';

const routes: Routes = [
  {
    path: '',
    component: ResponsavelPage
  },
  {
    path: 'listagem-responsavel',
    loadChildren: () => import('./listagem-responsavel/listagem-responsavel.module').then( m => m.ListagemResponsavelPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResponsavelPageRoutingModule {}
