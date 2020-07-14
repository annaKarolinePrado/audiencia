import { Component, OnInit } from '@angular/core';
import { Audiencia } from 'src/app/service/audiencia';
import { TipoResponsavel } from 'src/app/tipo-responsavel';
import { NavController } from '@ionic/angular';
import { Util } from 'src/app/service/util';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-listagem-tipo-responsavel',
  templateUrl: './listagem-tipo-responsavel.page.html',
  styleUrls: ['./listagem-tipo-responsavel.page.scss'],
})
export class ListagemTipoResponsavelPage implements OnInit {
  tiposResponsaveis: TipoResponsavel[]=[];
  constructor(public audiencia: Audiencia, public navCtrl:NavController,private router: Router) { }

  ngOnInit() {
    setTimeout(()=>{
      this.tiposResponsaveis = this.audiencia.getAll('tipo-responsavel');
    }),2000
   
  }
  editar(id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: id
      }
    };
    this.router.navigate(['/tipo-responsavel'], navigationExtras);
  }
  excluir(id) {    
    setTimeout(()=>{
      this.audiencia.delete("tipo-responsavel/"+id+"/excluir");
    });
    this.tiposResponsaveis = this.audiencia.getAll('tipo-responsavel');
  }

}
