import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Autenticar } from '../service/autenticar';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.page.html',
  styleUrls: ['./usuario-cadastro.page.scss'],
})
export class UsuarioCadastroPage implements OnInit {
  public formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder, public autentica: Autenticar) {
    this.formGroup = this.formBuilder.group({
      'nome':[null,Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      'email':[null,Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(250),
        Validators.email
      ])],
      'senha':[null,Validators.compose([
        Validators.required,
        Validators.minLength(6),
      ])],
      'confirma':[null,Validators.compose([
        Validators.required,
        Validators.minLength(6),
      ])]
    });
   }

  ngOnInit() {
    setTimeout(()=>{
      this.formGroup.get('email').setValue('');
    })
    
  }
  salvar() {
    console.log(this.formGroup.value);
    let usuario= {
      'name':this.formGroup.get('nome').value,
      'email': this.formGroup.get('email').value,
      'password': this.formGroup.get('senha').value,
      'password_confirmation': this.formGroup.get('confirma').value
    }
    this.autentica.salvar(usuario);   
  }
  

}
