import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Audiencia } from '../service/audiencia';
import { AotSummaryResolver } from '@angular/compiler';
import { NaturezaTextoJuridico } from '../natureza-texto-juridico';
import { FonteDivulgacao } from '../fonte-divulgacao';
import { ActivatedRoute } from '@angular/router';
import { Ato } from '../ato';
import { EquipePlanejamento } from '../equipe-planejamento';


@Component({
  selector: 'app-audiencia',
  templateUrl: './audiencia.page.html',
  styleUrls: ['./audiencia.page.scss'],
})
export class AudienciaPage implements OnInit {
  public formGroup: FormGroup;
  private id : number = null;
  public audiencias: Audiencia[];
  public equipes:EquipePlanejamento[];

  constructor(private formBuilder: FormBuilder, public audiencia: Audiencia,
    public activatedRoute: ActivatedRoute) {
    this.formGroup = this.formBuilder.group({
      'tema':[null,Validators.compose([
        Validators.required,
      ])],
      'ato':[null,Validators.compose([
        Validators.required,
      ])],
      'dataHora':[null,Validators.compose([
        Validators.required,
      ])],
      'equipePlanejamento':[null],
      'enderecoDoBeneficiado':[null,Validators.compose([
        Validators.required,
      ])],
      'tipoAudiencia':[null,Validators.compose([
        Validators.required,
      ])],
      'enderecoBeneficiado':[null],
      'situacao':[null],
      'dataPrimeiraConvocacao':[null],
      'assunto':[null,Validators.compose([
        Validators.required,
      ])]
    });
   }

  ngOnInit() {
    this.audiencias = this.audiencia.getAll("audiencia/");
    //this.equipes = this.audiencia.getAll("equipe-planejamento/")  
    this.activatedRoute.queryParams.subscribe( parametros => {
      if (parametros['id']) {
        this.id =parametros['id'];
        
        this.audiencia.get('audiencia/'+this.id).subscribe(val => {
          this.formGroup.get('tema').setValue(val.tema);
          this.formGroup.get('ato').setValue(val.ato);
          this.formGroup.get('dataHora').setValue(val.dataHora);  
          this.formGroup.get('dataPrimeiraConvocacao').setValue(val.dataPrimeiraConvocacao);  
          this.formGroup.get('situacao').setValue(val.situacao);  
          this.formGroup.get('equipePlanejamento').setValue(val.equipePlanejamento);  
          this.formGroup.get('enderecoDoBeneficiado').setValue(val.enderecoDoBeneficiado);  
          this.formGroup.get('tipoAudiencia').setValue(val.tipoAudiencia);  
          this.formGroup.get('enderecoBeneficiado').setValue(val.enderecoBeneficiado);  
          this.formGroup.get('assunto').setValue(val.assunto);  
        });       
      }
    });
  }

  salvar() {
    let audiencia= {
      'id':this.id,
      'tema':this.formGroup.get('tema').value,
      'ato':this.formGroup.get('ato').value,
      'dataHora':this.formGroup.get('dataHora').value,
      'dataPrimeiraConvocacao':this.formGroup.get('dataPrimeiraConvocacao').value,
      'situacao':this.formGroup.get('situacao').value,
      'equipePlanejamento':this.formGroup.get('equipePlanejamento').value,
      'enderecoDoBeneficiado':this.formGroup.get('enderecoDoBeneficiado').value,
      'tipoAudiencia':this.formGroup.get('tipoAudiencia').value,
      'enderecoBeneficiado':this.formGroup.get('enderecoBeneficiado').value,
      'assunto':this.formGroup.get('assunto').value
    }
    if (this.id) {
      this.audiencia.atualizar(audiencia, 'audiencia/atualizar') 
    }else{
      this.audiencia.salvar(audiencia, "audiencia/salvar"); 
    }
  }
}
