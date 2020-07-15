import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudienciaPage } from './audiencia.page';

const routes: Routes = [
  {
    path: '',
    component: AudienciaPage
  },
  {
    path: 'listagem-audiencia',
    loadChildren: () => import('./listagem-audiencia/listagem-audiencia.module').then( m => m.ListagemAudienciaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudienciaPageRoutingModule {}
