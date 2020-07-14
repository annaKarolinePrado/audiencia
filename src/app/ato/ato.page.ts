import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Audiencia } from '../service/audiencia';
import { AotSummaryResolver } from '@angular/compiler';
import { TipoAto } from '../tipo-ato';

@Component({
  selector: 'app-ato',
  templateUrl: './ato.page.html',
  styleUrls: ['./ato.page.scss'],
})
export class AtoPage implements OnInit {
  public formGroup: FormGroup;
  public tipoAtos: TipoAto[];
  constructor(private formBuilder: FormBuilder, public audiencia: Audiencia) {
    this.formGroup = this.formBuilder.group({
      'numero':[null,Validators.compose([
        Validators.required,
      ])]
    });
   }

  ngOnInit() {
    this.tipoAtos = this.audiencia.getAll("tipo-ato/"); 
  }
  salvar() {
    console.log(this.formGroup.value);
    let ato= {
      'numero':this.formGroup.get('numero').value
    }
    console.log(this.formGroup.get('ato').value); 
    console.log(ato); 
    //this.audiencia.salvar(ato, "ato/salvar");   
  }
  

}
