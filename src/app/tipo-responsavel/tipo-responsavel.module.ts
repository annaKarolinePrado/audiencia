import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoResponsavelPageRoutingModule } from './tipo-responsavel-routing.module';

import { TipoResponsavelPage } from './tipo-responsavel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoResponsavelPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TipoResponsavelPage]
})
export class TipoResponsavelPageModule {}
