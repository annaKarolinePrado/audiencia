import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagemNaturezaJuridicaPageRoutingModule } from './listagem-natureza-juridica-routing.module';

import { ListagemNaturezaJuridicaPage } from './listagem-natureza-juridica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemNaturezaJuridicaPageRoutingModule
  ],
  declarations: [ListagemNaturezaJuridicaPage]
})
export class ListagemNaturezaJuridicaPageModule {}
