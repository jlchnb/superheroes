import { Component, OnInit } from '@angular/core';
import { ServiceHeroesService } from 'src/app/api/service-heroes/service-heroes.service';
import { Heroe } from 'src/app/models/heroe';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-heroes',
  templateUrl: './lista-heroes.page.html',
  styleUrls: ['./lista-heroes.page.scss'],
})
export class ListaHeroesPage implements OnInit {

  heroes: Heroe[] = [];

  constructor(private _heroesService: ServiceHeroesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.heroes = this._heroesService.obtener_lista_de_heroes();
    console.info(this.heroes)
  }

  detalle_heroe(heroe: Heroe){
    console.info(heroe)
    this.router.navigate(['detalle-heroe'], {
      queryParams:{
        heroe: JSON.stringify(heroe)
      },
      relativeTo: this.route
    })
  }

}
