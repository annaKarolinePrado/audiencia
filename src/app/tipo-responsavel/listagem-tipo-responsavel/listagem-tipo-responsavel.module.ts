import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagemTipoResponsavelPageRoutingModule } from './listagem-tipo-responsavel-routing.module';

import { ListagemTipoResponsavelPage } from './listagem-tipo-responsavel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemTipoResponsavelPageRoutingModule
  ],
  declarations: [ListagemTipoResponsavelPage]
})
export class ListagemTipoResponsavelPageModule {}
