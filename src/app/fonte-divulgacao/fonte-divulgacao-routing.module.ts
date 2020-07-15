import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FonteDivulgacaoPage } from './fonte-divulgacao.page';

const routes: Routes = [
  {
    path: '',
    component: FonteDivulgacaoPage
  },
  {
    path: 'listagem-fonte',
    loadChildren: () => import('./listagem-fonte/listagem-fonte.module').then( m => m.ListagemFontePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FonteDivulgacaoPageRoutingModule {}
