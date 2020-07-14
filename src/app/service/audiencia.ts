import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CONFIG_API } from "../service/config";
import { Util } from './util';
import { Observable } from 'rxjs';
import { TipoResponsavel } from '../tipo-responsavel';

@Injectable()
export class Audiencia {
    data = [];
    constructor(public http: HttpClient,public util: Util) {
    }
    
    getAll(subUrl) {        
        let url = CONFIG_API.url + subUrl;
        let headers = new HttpHeaders();
        let listaRetorno= [];
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ');
        const promise = new Promise((resolve, reject) => {
            this.http.get<[]>(url,{headers})
            .toPromise().then((res: any) => {
                // Success
                this.data = res.map((res: any) => {
                listaRetorno.push(res);
                resolve();
                });
            },
                error => {
                    this.util.exibirMensagem("Erro.",error.error.mensagem)
                    console.log(error.error.mensagem);
            });
        });
        return listaRetorno;       
      } 
      delete(subUrl) {        
        let url = CONFIG_API.url + subUrl;
        let headers = new HttpHeaders();
        let listaRetorno= [];
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ');
        const promise = new Promise((resolve, reject) => {
            this.http.delete(url,{headers})
            .toPromise().then((res: any) => {
                resolve(res);
                this.util.exibirMensagem("Sucesso.",'Excluído com sucesso!');
            },
                error => {
                    this.util.exibirMensagem("Erro.",error.error.mensagem)
                    console.log(error.error.mensagem);
            });
        });
        return true;       
      } 
      get(subUrl){        
        let url = CONFIG_API.url + subUrl;
        let headers = new HttpHeaders();
        let retorno =[];
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ');
        const promise = new Promise((resolve, reject) => {
            this.http.get(url,{headers})
            .toPromise().then((res: any) => {
                retorno.push(res);
                resolve();
            },
                error => {
                    this.util.exibirMensagem("Erro.",error.error.mensagem)
                    console.log(error.error.mensagem);
            });
        });
        return retorno;       
      }
      salvar(dados,subUrl) {
        let url = CONFIG_API.url + subUrl;
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ');
        return new Promise((resolve, reject) => {   
          this.http.post(url, dados)
            .subscribe((result: any) => {
              this.util.exibirMensagem("Sucesso.","Salvo com sucesso.");
              resolve();
            },
            (error) => {
              this.util.exibirMensagem("Erro.",error.error.mensagem)
              console.log(error.error.mensagem);
            });
        });
      } 
    }