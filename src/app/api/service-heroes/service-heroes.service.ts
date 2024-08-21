import { Injectable } from '@angular/core';
import { Heroe } from 'src/app/models/heroe';

@Injectable({
  providedIn: 'root'
})
export class ServiceHeroesService {

  lista_de_heroes: Heroe[] = [
    {
      "id": 1,
      "name": "Batman",
      "pelicula": [
        {
          "id": 1,
          "name": "Batman 1"
        }
      ]
    }
  ]

  constructor() { }

  obtener_lista_de_heroes(): Heroe[] {
    return this.lista_de_heroes;
  }
}
