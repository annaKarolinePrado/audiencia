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
    
    
    
}