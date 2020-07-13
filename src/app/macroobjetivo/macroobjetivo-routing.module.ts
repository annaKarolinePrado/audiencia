import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MacroobjetivoPage } from './macroobjetivo.page';

const routes: Routes = [
  {
    path: '',
    component: MacroobjetivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MacroobjetivoPageRoutingModule {}
