import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'bem-vindo',
    loadChildren: () => import('./bem-vindo/bem-vindo.module').then( m => m.BemVindoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'usuario-cadastro',
    loadChildren: () => import('./usuario-cadastro/usuario-cadastro.module').then( m => m.UsuarioCadastroPageModule)
  },
  {
    path: 'tipo-ato',
    loadChildren: () => import('./tipo-ato/tipo-ato.module').then( m => m.TipoAtoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
