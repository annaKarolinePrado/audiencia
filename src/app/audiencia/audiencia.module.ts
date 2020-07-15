import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudienciaPageRoutingModule } from './audiencia-routing.module';

import { AudienciaPage } from './audiencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudienciaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AudienciaPage]
})
export class AudienciaPageModule {}
