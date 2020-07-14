import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtoPage } from './ato.page';

const routes: Routes = [
  {
    path: '',
    component: AtoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtoPageRoutingModule {}
