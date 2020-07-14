import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoEdicaoPage } from './tipo-edicao.page';

const routes: Routes = [
  {
    path: '',
    component: TipoEdicaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoEdicaoPageRoutingModule {}
