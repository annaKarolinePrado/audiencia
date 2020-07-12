import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoAtoPageRoutingModule } from './tipo-ato-routing.module';

import { TipoAtoPage } from './tipo-ato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoAtoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TipoAtoPage]
})
export class TipoAtoPageModule {}
