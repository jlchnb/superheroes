import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/models/heroe';

@Component({
  selector: 'app-detalle-heroe',
  templateUrl: './detalle-heroe.page.html',
  styleUrls: ['./detalle-heroe.page.scss'],
})
export class DetalleHeroePage implements OnInit {

  heroe!: Heroe;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      this.heroe = JSON.parse(params['heroe'])
    });
    console.info(this.heroe)
  }

}
