import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResponsavelPageRoutingModule } from './responsavel-routing.module';

import { ResponsavelPage } from './responsavel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResponsavelPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ResponsavelPage]
})
export class ResponsavelPageModule {}
