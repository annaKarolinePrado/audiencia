import { Injectable } from "@angular/core";
import { AlertController } from '@ionic/angular';

@Injectable()
export class Util {
    constructor( private alertController: AlertController) { }
    async  exibirMensagem(titulo,mensagem) {
        let alerta = await this.alertController.create({
            header: titulo,
            message: mensagem,
            buttons: [
                {
                  text: 'OK'
                }
              ]           
        });
        alerta.present();
    }
    
    getTipoAto(atoID){
      if (atoID == 1) {
        return "Jornal com circulação nacional"
      } 
      if (atoID == 1) {
        return "Jornal com circulação estadual"
      } 
      if (atoID == 1) {
        return "Jornal com circulação regional"
      } 
      if (atoID == 1) {
        return "Jornal com circulação municipal"
      } 
      if (atoID == 1) {
        return "Diário oficial da união"
      } 
      if (atoID == 1) {
        return "Diário oficial do estado"
      } 
      if (atoID == 1) {
        return "Diário oficial do município"
      } 
      if (atoID == 1) {
        return "Diário oficial eletrônico do tribunal de contas do estado"
      } 
      if (atoID == 1) {
        return "Diário da justiça"
      } 
      if (atoID == 1) {
        return "Diário da assembléia"
      } 
      if (atoID == 1) {
        return "Mural público"
      } 
      if (atoID == 1) {
        return "Internet"
      } 
      if (atoID == 1) {
        return "Editora"
      } 
    }
    
}