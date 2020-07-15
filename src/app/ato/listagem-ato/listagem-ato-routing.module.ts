import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagemAtoPage } from './listagem-ato.page';

const routes: Routes = [
  {
    path: '',
    component: ListagemAtoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagemAtoPageRoutingModule {}
