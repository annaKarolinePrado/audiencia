import { Component, OnInit } from '@angular/core';
import { Audiencia } from 'src/app/service/audiencia';
import { TipoResponsavel } from 'src/app/tipo-responsavel';
import { NavController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { NaturezaTextoJuridico } from 'src/app/natureza-texto-juridico';

@Component({
  selector: 'app-listagem-natureza-juridica',
  templateUrl: './listagem-natureza-juridica.page.html',
  styleUrls: ['./listagem-natureza-juridica.page.scss'],
})
export class ListagemNaturezaJuridicaPage implements OnInit {
  naturezaJuridica: NaturezaTextoJuridico[]=[];
  constructor(public audiencia: Audiencia, public navCtrl:NavController,private router: Router) { }

  ngOnInit() {
    setTimeout(()=>{
      this.naturezaJuridica = this.audiencia.getAll('natureza-texto-juridico');
    })
   
  }
  editar(id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: id
      }
    };
    this.router.navigate(['/natureza-texto-juridico'], navigationExtras);
  }
  excluir(id) {    
    setTimeout(()=>{
      this.audiencia.delete("natureza-texto-juridico/"+id+"/excluir");
      this.router.navigate(['/natureza-texto-juridico']);
    });
  }
  

}
