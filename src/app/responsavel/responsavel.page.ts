import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Autenticar } from '../service/autenticar';

@Component({
  selector: 'app-responsavel',
  templateUrl: './responsavel.page.html',
  styleUrls: ['./responsavel.page.scss'],
})
export class ResponsavelPage implements OnInit {
  public formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder, public autentica: Autenticar) {
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

  salvar() {}

}
