import { Component, OnInit } from '@angular/core';
import { Audiencia } from 'src/app/service/audiencia';
import { TipoResponsavel } from 'src/app/tipo-responsavel';
import { NavController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { FonteDivulgacao } from 'src/app/fonte-divulgacao';

@Component({
  selector: 'app-listagem-fonte',
  templateUrl: './listagem-fonte.page.html',
  styleUrls: ['./listagem-fonte.page.scss'],
})
export class ListagemFontePage implements OnInit {
  fontes: FonteDivulgacao[]=[];
  constructor(public audiencia: Audiencia, public navCtrl:NavController,private router: Router) { }

  ngOnInit() {
    setTimeout(()=>{
      this.fontes = this.audiencia.getAll('fonte-divulgacao');
    }),2000
   
  }
  editar(id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: id
      }
    };
    this.router.navigate(['/fonte-divulgacao'], navigationExtras);
  }
  excluir(id) {    
    setTimeout(()=>{
      this.audiencia.delete("fonte-divulgacao/"+id+"/excluir");
      this.router.navigate(['/fonte-divulgacao']);
    }),2000
  }
}
