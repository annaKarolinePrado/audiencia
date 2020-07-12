import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NaturezaTextoJuridicoPageRoutingModule } from './natureza-texto-juridico-routing.module';

import { NaturezaTextoJuridicoPage } from './natureza-texto-juridico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NaturezaTextoJuridicoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NaturezaTextoJuridicoPage]
})
export class NaturezaTextoJuridicoPageModule {}
