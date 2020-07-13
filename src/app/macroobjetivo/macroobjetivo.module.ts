import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MacroobjetivoPageRoutingModule } from './macroobjetivo-routing.module';

import { MacroobjetivoPage } from './macroobjetivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MacroobjetivoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MacroobjetivoPage]
})
export class MacroobjetivoPageModule {}
