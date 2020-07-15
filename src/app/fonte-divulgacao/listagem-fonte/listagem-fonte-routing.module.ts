import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagemFontePage } from './listagem-fonte.page';

const routes: Routes = [
  {
    path: '',
    component: ListagemFontePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagemFontePageRoutingModule {}
