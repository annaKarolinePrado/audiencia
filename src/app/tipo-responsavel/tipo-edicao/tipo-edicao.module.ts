import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoEdicaoPageRoutingModule } from './tipo-edicao-routing.module';

import { TipoEdicaoPage } from './tipo-edicao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoEdicaoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TipoEdicaoPage]
})
export class TipoEdicaoPageModule {}
