import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tipo-responsavel-listagem',
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
  },
  {
    path: 'natureza-texto-juridico',
    loadChildren: () => import('./natureza-texto-juridico/natureza-texto-juridico.module').then( m => m.NaturezaTextoJuridicoPageModule)
  },
  {
    path: 'fonte-divulgacao',
    loadChildren: () => import('./fonte-divulgacao/fonte-divulgacao.module').then( m => m.FonteDivulgacaoPageModule)
  },
  {
    path: 'macroobjetivo',
    loadChildren: () => import('./macroobjetivo/macroobjetivo.module').then( m => m.MacroobjetivoPageModule)
  },
  {
    path: 'tipo-responsavel',
    loadChildren: () => import('./tipo-responsavel/tipo-responsavel.module').then( m => m.TipoResponsavelPageModule)
  },
  {
    path: 'tipo-responsavel-listagem',
    loadChildren: () => import('./tipo-responsavel/listagem-tipo-responsavel/listagem-tipo-responsavel.module').then( m => m.ListagemTipoResponsavelPageModule)
  },
  {
    path: 'responsavel',
    loadChildren: () => import('./responsavel/responsavel.module').then( m => m.ResponsavelPageModule)
  },  {
    path: 'ato',
    loadChildren: () => import('./ato/ato.module').then( m => m.AtoPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
