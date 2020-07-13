import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Autenticar } from '../service/autenticar';

@Component({
  selector: 'app-macroobjetivo',
  templateUrl: './macroobjetivo.page.html',
  styleUrls: ['./macroobjetivo.page.scss'],
})
export class MacroobjetivoPage implements OnInit {
  public formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder, public autentica: Autenticar) {
    this.formGroup = this.formBuilder.group({
      'descricao':[null,Validators.compose([
        Validators.required
      ])],
      'denominacao':[null,Validators.compose([
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
    let macroobjetivo= {
      'denominacao':this.formGroup.get('denominacao').value,
      'descricao':this.formGroup.get('descricao').value
    }
    console.log(macroobjetivo); 
    //this.autentica.salvar(usuario);   
  }
  

}

