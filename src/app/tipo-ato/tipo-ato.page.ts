import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Autenticar } from '../service/autenticar';

@Component({
  selector: 'app-tipo-ato',
  templateUrl: './tipo-ato.page.html',
  styleUrls: ['./tipo-ato.page.scss'],
})
export class TipoAtoPage implements OnInit {
  public formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder, public autentica: Autenticar) {
    this.formGroup = this.formBuilder.group({
      'descricao':[null,Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])],
      'classificacao':[null,Validators.compose([
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
    let ato= {
      'descricao':this.formGroup.get('descricao').value,
      'classificacao': this.formGroup.get('classificacao').value
    }
    console.log(ato); 
    //this.autentica.salvar(usuario);   
  }
  

}
