import { Component, OnInit } from '@angular/core';
import { Audiencia } from 'src/app/service/audiencia';
import { TipoResponsavel } from 'src/app/tipo-responsavel';
import { NavController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { Ato } from 'src/app/ato';
import { TipoAto } from 'src/app/tipo-ato';

@Component({
  selector: 'app-listagem-ato',
  templateUrl: './listagem-ato.page.html',
  styleUrls: ['./listagem-ato.page.scss'],
})
export class ListagemAtoPage implements OnInit {
  atos: Ato[]=[];
  public tipoAto: TipoAto;

  constructor(public audiencia: Audiencia, public navCtrl:NavController,private router: Router) { }

  ngOnInit() {
    setTimeout(()=>{
      this.atos = this.audiencia.getAll('ato');
      console.log(this.atos)
    }),2000
   
    

  }
  editar(id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: id
      }
    };
    this.router.navigate(['/ato'], navigationExtras);
  }
  excluir(id) {    
    setTimeout(()=>{
      this.audiencia.delete("ato/"+id+"/excluir");
      this.router.navigate(['/ato']);
    }),2000
  }
}
