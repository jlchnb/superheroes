import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'lista-heroes',
    loadChildren: () => import('./page/lista-heroes/lista-heroes.module').then( m => m.ListaHeroesPageModule)
  },
  {
    path: '',
    redirectTo: 'lista-heroes',
    pathMatch: 'full'
  },
  {
    path: 'detalle-heroe',
    loadChildren: () => import('./page/lista-heroes/detalle-heroe/detalle-heroe.module').then( m => m.DetalleHeroePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
