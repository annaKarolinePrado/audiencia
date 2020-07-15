import { Component, OnInit } from '@angular/core';
import { Audiencia } from 'src/app/service/audiencia';
import { NavController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { Responsavel } from 'src/app/responsavel';

@Component({
  selector: 'app-listagem-responsavel',
  templateUrl: './listagem-responsavel.page.html',
  styleUrls: ['./listagem-responsavel.page.scss'],
})
export class ListagemResponsavelPage implements OnInit {
  responsavel: Responsavel[]=[];
  constructor(public audiencia: Audiencia, public navCtrl:NavController,private router: Router) { }

   ngOnInit() {
   setTimeout(()=>{
       this.responsavel = this.audiencia.getAll('responsavel');
     }),2000
   
   }

  ionViewWillEnter() {
    this.responsavel = this.audiencia.getAll('responsavel');
  }
  editar(id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: id
      }
    };
    this.router.navigate(['/responsavel'], navigationExtras);
  }
  excluir(id) {    
    
      this.audiencia.delete("responsavel/"+id+"/excluir");
      // this.router.navigate(['./listagem-responsavel']);
    setTimeout(()=>{
      this.responsavel = this.audiencia.getAll('responsavel');
    }),2000;
  }


}
