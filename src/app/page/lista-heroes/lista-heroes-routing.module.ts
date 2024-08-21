import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaHeroesPage } from './lista-heroes.page';

const routes: Routes = [
  {
    path: '',
    component: ListaHeroesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaHeroesPageRoutingModule {}
