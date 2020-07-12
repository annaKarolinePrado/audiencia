import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Autenticar } from '../service/autenticar';

@Component({
  selector: 'app-natureza-texto-juridico',
  templateUrl: './natureza-texto-juridico.page.html',
  styleUrls: ['./natureza-texto-juridico.page.scss'],
})
export class NaturezaTextoJuridicoPage implements OnInit {
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
    let naturezaTextoJuridico = {
      'descricao':this.formGroup.get('descricao').value
    }
    console.log(naturezaTextoJuridico); 
    //this.autentica.salvar(usuario);   
  }
  

}
