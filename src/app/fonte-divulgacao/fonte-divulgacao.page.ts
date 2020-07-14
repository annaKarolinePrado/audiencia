import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Audiencia } from '../service/audiencia';

@Component({
  selector: 'app-fonte-divulgacao',
  templateUrl: './fonte-divulgacao.page.html',
  styleUrls: ['./fonte-divulgacao.page.scss'],
})
export class FonteDivulgacaoPage implements OnInit {
  public formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder, public audiencia: Audiencia) {
    this.formGroup = this.formBuilder.group({
      'nome':[null,Validators.compose([
        Validators.required,
      ])],
      'fonteDivulgacao':[null,Validators.compose([
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
    let fonte= {
      'nome':this.formGroup.get('nome').value,
      'fonteDivulgacao': this.formGroup.get('fonteDivulgacao').value
    }
    console.log(this.formGroup.get('fonteDivulgacao').value); 
    console.log(fonte); 
    this.audiencia.salvar(fonte, "fonte-divulgacao/salvar");   
  }
  

}
