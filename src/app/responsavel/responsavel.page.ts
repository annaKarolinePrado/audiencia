import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavigationExtras, ActivatedRoute, Router } from '@angular/router';
import { Audiencia } from '../service/audiencia';
import { Responsavel } from '../responsavel';
import { TipoResponsavel } from '../tipo-responsavel';

@Component({
  selector: 'app-responsavel',
  templateUrl: './responsavel.page.html',
  styleUrls: ['./responsavel.page.scss'],
})
export class ResponsavelPage implements OnInit {
  public formGroup: FormGroup;
  private id : number = null;
  public router: Router;
  public responsavel: Responsavel;
  public tipoResponsavel: TipoResponsavel[];

  constructor(private formBuilder: FormBuilder, public audiencia: Audiencia,
    public activatedRoute: ActivatedRoute) {
    this.formGroup = this.formBuilder.group({
      'nome':[null,Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])],
      'cpf':[null,Validators.compose([
        Validators.required
      ])],
      'rg':[null,Validators.compose([
        Validators.required
      ])],
      'tipo_responsavel':[null,Validators.compose([
        Validators.required
      ])],
      'cargo':[null,Validators.compose([
        Validators.required
      ])],
      'email':[null,Validators.compose([
        Validators.required
      ])],
      'telefone':[null,Validators.compose([
        Validators.required
      ])]
    });
   }

  ngOnInit() {
    this.tipoResponsavel = this.audiencia.getAll("tipo-responsavel/");
    this.activatedRoute.queryParams.subscribe( parametros => {
      if (parametros['id']) {
        this.id =parametros['id'];
        this.audiencia.get('responsavel/'+this.id).subscribe(val => {
          this.formGroup.get('nome').setValue(val.nome);
          this.formGroup.get('cpf').setValue(val.cpf);
          this.formGroup.get('rg').setValue(val.rg);
          this.formGroup.get('tipo_responsavel').setValue(val.tipo_responsavel);
          this.formGroup.get('cargo').setValue(val.cargo);
          this.formGroup.get('email').setValue(val.email);
          this.formGroup.get('telefone').setValue(val.telefone);
      });       
    }
  });

  }

  salvar() {
    console.log(this.formGroup.value);
    let tipoResponsavel= {
      'id':this.id,
      'nome':this.formGroup.get('nome').value,
      'cpf': this.formGroup.get('cpf').value,
      'rg': this.formGroup.get('rg').value,
      'tipo_responsavel': this.formGroup.get('tipo_responsavel').value,
      'cargo': this.formGroup.get('cargo').value,
      'email': this.formGroup.get('email').value,
      'telefone': this.formGroup.get('telefone').value
    }
    if (this.id) {
      this.audiencia.atualizar(tipoResponsavel, 'responsavel/atualizar') 
    }else{
      this.audiencia.salvar(tipoResponsavel, "responsavel/salvar"); 
    }
  }

}
