import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagemAtoPageRoutingModule } from './listagem-ato-routing.module';

import { ListagemAtoPage } from './listagem-ato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemAtoPageRoutingModule
  ],
  declarations: [ListagemAtoPage]
})
export class ListagemAtoPageModule {}
