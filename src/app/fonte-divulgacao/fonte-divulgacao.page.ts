import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Audiencia } from '../service/audiencia';
import { NavigationExtras, ActivatedRoute, Router } from '@angular/router';
import { FonteDivulgacao } from '../fonte-divulgacao';

@Component({
  selector: 'app-fonte-divulgacao',
  templateUrl: './fonte-divulgacao.page.html',
  styleUrls: ['./fonte-divulgacao.page.scss'],
})
export class FonteDivulgacaoPage implements OnInit {

  public formGroup: FormGroup;
  private id : number = null;
  public fonteDivulgacao:FonteDivulgacao;
  public router: Router;
  
  constructor(private formBuilder: FormBuilder, public audiencia: Audiencia,
    public activatedRoute: ActivatedRoute) {
    this.formGroup = this.formBuilder.group({
      'nome':[null,Validators.compose([
        Validators.required,
      ])],
      'fonteDivulgacao':[null,Validators.compose([
        Validators.required
      ])]
    });
   }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe( parametros => {
      if (parametros['id']) {
        this.id =parametros['id'];
        
        this.audiencia.get('fonte-divulgacao/'+this.id).subscribe(val => {
          this.formGroup.get('nome').setValue(val.nome);
          this.formGroup.get('fonteDivulgacao').setValue(val.fonteDivulgacao);  
        });       
      }
    });
  }
  salvar() {
    let fonte= {
      'id':this.id,
      'nome':this.formGroup.get('nome').value,
      'fonteDivulgacao': this.formGroup.get('fonteDivulgacao').value
    }
    if (this.id) {
      this.audiencia.atualizar(fonte, 'fonte-divulgacao/atualizar') 
    }else{
      this.audiencia.salvar(fonte, "fonte-divulgacao/salvar"); 
    }  
    this.formGroup.get('nome').setValue('');  
    this.formGroup.get('fonteDivulgacao').setValue('1');  
  }
}
