import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagemResponsavelPageRoutingModule } from './listagem-responsavel-routing.module';

import { ListagemResponsavelPage } from './listagem-responsavel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemResponsavelPageRoutingModule
  ],
  declarations: [ListagemResponsavelPage]
})
export class ListagemResponsavelPageModule {}
