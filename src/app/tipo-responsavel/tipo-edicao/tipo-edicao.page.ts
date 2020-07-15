import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Audiencia } from '../../service/audiencia';
import {  ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { TipoResponsavel } from '../../tipo-responsavel';
@Component({
  selector: 'app-tipo-edicao',
  templateUrl: './tipo-edicao.page.html',
  styleUrls: ['./tipo-edicao.page.scss'],
})
export class TipoEdicaoPage implements OnInit {
  public formGroup: FormGroup;
  private id : number = null;
  public tipoResponsavel:TipoResponsavel;

  constructor(private formBuilder: FormBuilder, public audiencia: Audiencia
    ,public activatedRoute: ActivatedRoute,private router: Router) {
    this.formGroup = this.formBuilder.group({
      'descricao':[null,Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])]
    });
   }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe( parametros => {
        if (parametros['id']) {
          console.log("pasouuuuuuuuu");
          this.id =parametros['id'];
          this.audiencia.get('tipo-responsavel/'+this.id).subscribe(val => {
            this.formGroup.get('descricao').setValue(val.descricao);  
        });       
      }
    });
  
  }
  atualizar() {
    let tipoResponsavel = {
      'id':this.id,
      'descricao':this.formGroup.get('descricao').value
    } 
    this.audiencia.atualizar(tipoResponsavel, 'tipo-responsavel/atualizar') 
  }
  
  listar() {
    console.log("bhyvb");
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: this.id
      }
    };
    this.router.navigate(['/tipo-responsavel-listagem'], navigationExtras);  
  }
  

}
