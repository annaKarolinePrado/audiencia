import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Audiencia } from '../service/audiencia';
import { NavigationExtras, ActivatedRoute, Router } from '@angular/router';
import { NaturezaTextoJuridico } from '../natureza-texto-juridico';

@Component({
  selector: 'app-natureza-texto-juridico',
  templateUrl: './natureza-texto-juridico.page.html',
  styleUrls: ['./natureza-texto-juridico.page.scss'],
})
export class NaturezaTextoJuridicoPage implements OnInit {
  public formGroup: FormGroup;
  private id : number = null;
  public naturezaJuridica:NaturezaTextoJuridico;
  public router: Router;

  constructor(private formBuilder: FormBuilder, public audiencia: Audiencia,
    public activatedRoute: ActivatedRoute) {
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
        this.id =parametros['id'];
        this.audiencia.get('natureza-texto-juridico/'+this.id).subscribe(val => {
          this.formGroup.get('descricao').setValue(val.descricao);  
      });       
    }
  });
    
  }
  salvar() {
    let naturezaTextoJuridico = {
      'id':this.id,
      'descricao':this.formGroup.get('descricao').value
    }
    if (this.id) {
      this.audiencia.atualizar(naturezaTextoJuridico, 'natureza-texto-juridico/atualizar') 
    }else{
      this.audiencia.salvar(naturezaTextoJuridico, "natureza-texto-juridico/salvar"); 
    }  
    this.formGroup.get('descricao').setValue("");
  }
  
  listar() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: this.id
      }
    };
    this.router.navigate(['/tipo-responsavel-listagem'], navigationExtras);  
  }

}
