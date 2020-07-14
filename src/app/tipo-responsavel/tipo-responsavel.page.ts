import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Autenticar } from '../service/autenticar';
import { Audiencia } from '../service/audiencia';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { TipoResponsavel } from '../tipo-responsavel';

@Component({
  selector: 'app-tipo-responsavel',
  templateUrl: './tipo-responsavel.page.html',
  styleUrls: ['./tipo-responsavel.page.scss'],
})
export class TipoResponsavelPage implements OnInit {
  public formGroup: FormGroup;
  private id : number = null;
  private tipoResponsavel:TipoResponsavel;

  constructor(private formBuilder: FormBuilder, public audiencia: Audiencia,public router: ActivatedRoute) {
    this.formGroup = this.formBuilder.group({
      'descricao':[null,Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])]
    });
   }

  ngOnInit() {
    this.router.queryParams.subscribe( parametros => {
      if (parametros['id']) {
        this.id =parametros['id'];
        this.tipoResponsavel = <TipoResponsavel>this.audiencia.get('tipo-responsavel/'+this.id);
        let l = this.audiencia.get('tipo-responsavel/'+this.id);
        
        console.log(l);
        
      }
    });
    
  }
  salvar() {
    console.log(this.formGroup.value);
    let tipoResponsavel = {
      'descricao':this.formGroup.get('descricao').value
    } 
    this.audiencia.salvar(tipoResponsavel,'tipo-responsavel/salvar');   
  }
  

}
