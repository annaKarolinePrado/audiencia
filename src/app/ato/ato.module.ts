import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtoPageRoutingModule } from './ato-routing.module';

import { AtoPage } from './ato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AtoPage]
})
export class AtoPageModule {}
