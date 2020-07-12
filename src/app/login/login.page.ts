import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Autenticar } from '../service/autenticar';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder, public autentica: Autenticar) {
    this.formGroup = this.formBuilder.group({
      'email':[null,Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(250),
        Validators.email
      ])],
      'senha':[null,Validators.compose([
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
      'email': this.formGroup.get('email').value,
      'password': this.formGroup.get('senha').value
    }
    this.autentica.login(usuario);   
  }
  

}
