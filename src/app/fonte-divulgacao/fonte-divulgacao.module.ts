import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FonteDivulgacaoPageRoutingModule } from './fonte-divulgacao-routing.module';

import { FonteDivulgacaoPage } from './fonte-divulgacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FonteDivulgacaoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FonteDivulgacaoPage]
})
export class FonteDivulgacaoPageModule {}
