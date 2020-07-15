import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Audiencia } from '../service/audiencia';

@Component({
  selector: 'app-responsavel',
  templateUrl: './responsavel.page.html',
  styleUrls: ['./responsavel.page.scss'],
})
export class ResponsavelPage implements OnInit {
  public formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder, public audiencia: Audiencia) {
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
      'tipo-responsavel':[null,Validators.compose([
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
    setTimeout(()=>{
    })

  }

  salvar() {
    console.log(this.formGroup.value);
    let tipoAto= {
      'nome':this.formGroup.get('nome').value,
      'cpf': this.formGroup.get('cpf').value,
      'rg': this.formGroup.get('rg').value,
      'tipo_responsavel': this.formGroup.get('tipo_responsavel').value,
      'cargo': this.formGroup.get('cargo').value,
      'email': this.formGroup.get('email').value,
      'telefone': this.formGroup.get('telefone').value
    }
    console.log(tipoAto); 
    this.audiencia.salvar(tipoAto, "tipo-ato/salvar");}

}
