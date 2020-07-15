import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagemAudienciaPageRoutingModule } from './listagem-audiencia-routing.module';

import { ListagemAudienciaPage } from './listagem-audiencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemAudienciaPageRoutingModule
  ],
  declarations: [ListagemAudienciaPage]
})
export class ListagemAudienciaPageModule {}
