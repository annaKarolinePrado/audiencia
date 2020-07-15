import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtoPage } from './ato.page';

const routes: Routes = [
  {
    path: '',
    component: AtoPage
  },
  {
    path: 'listagem-ato',
    loadChildren: () => import('./listagem-ato/listagem-ato.module').then( m => m.ListagemAtoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtoPageRoutingModule {}
