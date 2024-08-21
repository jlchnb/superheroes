import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaHeroesPage } from './lista-heroes.page';

const routes: Routes = [
  {
    path: '',
    component: ListaHeroesPage
  },  {
    path: 'detalle-heroe',
    loadChildren: () => import('./detalle-heroe/detalle-heroe.module').then( m => m.DetalleHeroePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaHeroesPageRoutingModule {}
