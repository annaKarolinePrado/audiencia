import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Autenticar } from '../service/autenticar';

@Component({
  selector: 'app-tipo-responsavel',
  templateUrl: './tipo-responsavel.page.html',
  styleUrls: ['./tipo-responsavel.page.scss'],
})
export class TipoResponsavelPage implements OnInit {
  public formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder, public autentica: Autenticar) {
    this.formGroup = this.formBuilder.group({
      'descricao':[null,Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])]
    });
   }

  ngOnInit() {
    setTimeout(()=>{
    })
    
  }
  salvar() {
    console.log(this.formGroup.value);
    let tipoResponsavel = {
      'descricao':this.formGroup.get('descricao').value
    }
    console.log(tipoResponsavel); 
    //this.autentica.salvar(usuario);   
  }
  

}
