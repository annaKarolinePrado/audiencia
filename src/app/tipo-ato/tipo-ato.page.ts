import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Audiencia } from '../service/audiencia';

@Component({
  selector: 'app-tipo-ato',
  templateUrl: './tipo-ato.page.html',
  styleUrls: ['./tipo-ato.page.scss'],
})
export class TipoAtoPage implements OnInit {
  public formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder, public audiencia: Audiencia) {
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
    let tipoAto= {
      'descricao':this.formGroup.get('descricao').value,
      'classificacao': this.formGroup.get('classificacao').value
    }
    console.log(tipoAto); 
    this.audiencia.salvar(tipoAto, "tipo-ato/salvar");   
  }
  

}
