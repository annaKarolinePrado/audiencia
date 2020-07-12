import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-bem-vindo',
  templateUrl: './bem-vindo.page.html',
  styleUrls: ['./bem-vindo.page.scss'],
})
export class BemVindoPage implements OnInit {
  public formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      'email':[null,Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(250),
        Validators.email
      ])],
      'senha':[null,Validators.compose([
        Validators.required,
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
  }

}
