import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagemFontePageRoutingModule } from './listagem-fonte-routing.module';

import { ListagemFontePage } from './listagem-fonte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemFontePageRoutingModule
  ],
  declarations: [ListagemFontePage]
})
export class ListagemFontePageModule {}
