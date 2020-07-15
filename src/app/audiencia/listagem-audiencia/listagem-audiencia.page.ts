import { Component, OnInit } from '@angular/core';
import { Audiencia } from 'src/app/service/audiencia';
import { TipoResponsavel } from 'src/app/tipo-responsavel';
import { NavController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-listagem-audiencia',
  templateUrl: './listagem-audiencia.page.html',
  styleUrls: ['./listagem-audiencia.page.scss'],
})
export class ListagemAudienciaPage implements OnInit {
  audiencias: Audiencia[]=[];

  constructor(public audiencia: Audiencia, public navCtrl:NavController,private router: Router) { }

  ngOnInit() {
    setTimeout(()=>{
      this.audiencias = this.audiencia.getAll('audiencia');
    }),2000
   
    

  }
  editar(id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: id
      }
    };
    this.router.navigate(['/audiencia'], navigationExtras);
  }
  excluir(id) {    
    setTimeout(()=>{
      this.audiencia.delete("audiencia/"+id+"/excluir");
      this.router.navigate(['/audiencia']);
    }),2000
  }
}
