import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoAtoPage } from './tipo-ato.page';

const routes: Routes = [
  {
    path: '',
    component: TipoAtoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoAtoPageRoutingModule {}
