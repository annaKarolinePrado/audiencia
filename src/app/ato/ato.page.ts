import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Audiencia } from '../service/audiencia';
import { AotSummaryResolver } from '@angular/compiler';
import { TipoAto } from '../tipo-ato';
import { NaturezaTextoJuridico } from '../natureza-texto-juridico';
import { FonteDivulgacao } from '../fonte-divulgacao';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ato',
  templateUrl: './ato.page.html',
  styleUrls: ['./ato.page.scss'],
})
export class AtoPage implements OnInit {
  public formGroup: FormGroup;
  private id : number = null;
  public tipoAtos: TipoAto[];
  public naturezas:NaturezaTextoJuridico[];
  public fontes: FonteDivulgacao[];

  constructor(private formBuilder: FormBuilder, public audiencia: Audiencia,
    public activatedRoute: ActivatedRoute) {
    this.formGroup = this.formBuilder.group({
      'numero':[null,Validators.compose([
        Validators.required,
      ])],
      'tipo':[null,Validators.compose([
        Validators.required,
      ])],
      'naturezaTextoJuridico':[null,Validators.compose([
        Validators.required,
      ])],
      'fonteDivulgacao':[null,Validators.compose([
        Validators.required,
      ])],
      'dataCriacao':[null,Validators.compose([
        Validators.required,
      ])],
      'dataVigorar':[null,Validators.compose([
        Validators.required,
      ])],
      'dataRevogar':[null],
      'dataSancao':[null,Validators.compose([
        Validators.required,
      ])],
      'dataPublicacao':[null,Validators.compose([
        Validators.required,
      ])],
      'ementa':[null,Validators.compose([
        Validators.required,
      ])],
      'numeroDiarioOficial':[null]
    });
   }

  ngOnInit() {
    this.tipoAtos = this.audiencia.getAll("tipo-ato/");
    this.naturezas = this.audiencia.getAll("natureza-texto-juridico/") 
    this.fontes = this.audiencia.getAll("fonte-divulgacao/") 
    this.activatedRoute.queryParams.subscribe( parametros => {
      if (parametros['id']) {
        this.id =parametros['id'];
        
        this.audiencia.get('ato/'+this.id).subscribe(val => {
          this.formGroup.get('numero').setValue(val.numero);
          this.formGroup.get('tipo').setValue(val.tipo);
          this.formGroup.get('fonteDivulgacao').setValue(val.fonteDivulgacao);  
          this.formGroup.get('naturezaTextoJuridico').setValue(val.naturezaTextoJuridico);  
          this.formGroup.get('dataCriacao').setValue(val.dataCriacao);  
          this.formGroup.get('dataVigorar').setValue(val.dataVigorar);  
          this.formGroup.get('dataRevogar').setValue(val.dataRevogar);  
          this.formGroup.get('dataSancao').setValue(val.dataSancao);  
          this.formGroup.get('dataPublicacao').setValue(val.dataPublicacao);  
          this.formGroup.get('numeroDiarioOficial').setValue(val.numeroDiarioOficial);  
          this.formGroup.get('ementa').setValue(val.ementa);  
        });       
      }
    });
  }

  salvar() {
    console.log(this.formGroup.value);
    let ato= {
      'id':this.id,
      'numero':this.formGroup.get('numero').value,
      'tipo':this.formGroup.get('tipo').value,
      'naturezaTextoJuridico':this.formGroup.get('naturezaTextoJuridico').value,
      'dataCriacao':this.formGroup.get('dataCriacao').value,
      'dataVigorar':this.formGroup.get('dataVigorar').value,
      'dataRevogar':this.formGroup.get('dataRevogar').value,
      'dataSancao':this.formGroup.get('dataSancao').value,
      'dataPublicacao':this.formGroup.get('dataPublicacao').value,
      'numeroDiarioOficial':this.formGroup.get('numeroDiarioOficial').value,
      'fonteDivulgacao':this.formGroup.get('fonteDivulgacao').value,
      'ementa':this.formGroup.get('ementa').value
    }
    if (this.id) {
      this.audiencia.atualizar(ato, 'ato/atualizar') 
    }else{
      this.audiencia.salvar(ato, "ato/salvar"); 
    }
  }
}
