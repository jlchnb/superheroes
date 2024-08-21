import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleHeroePageRoutingModule } from './detalle-heroe-routing.module';

import { DetalleHeroePage } from './detalle-heroe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleHeroePageRoutingModule
  ],
  declarations: [DetalleHeroePage]
})
export class DetalleHeroePageModule {}
