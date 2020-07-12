import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CONFIG_API } from "../service/config";
import { Util } from './util';

@Injectable()
export class Autenticar {
    constructor(public http: HttpClient,public util: Util) {
    }
    salvar(usuario) {
      return new Promise((resolve, reject) => {   
        this.http.post(CONFIG_API.url + 'usuario/salvar', usuario)
          .subscribe((result: any) => {
            this.util.exibirMensagem("Sucesso.","Salvo com sucesso.")
            console.log(result);
            localStorage.setItem('usuarioId',result.user.id);
            localStorage.setItem('token','Bearer '+result.token);
          },
          (error) => {
            this.util.exibirMensagem("Erro.",error.error.mensagem)
            console.log(error.error.mensagem);
          });
      });
    }
    login(login) {
      return new Promise((resolve, reject) => {   
        this.http.post(CONFIG_API.url + 'login', login)
          .subscribe((result: any) => {
            localStorage.setItem('usuarioId',result.user.id);
            localStorage.setItem('token','Bearer '+result.token);
          },
          (error) => {
            this.util.exibirMensagem("Erro.",error.error.mensagem)
            console.log(error.error.mensagem);
          });
      });
    }

    
}