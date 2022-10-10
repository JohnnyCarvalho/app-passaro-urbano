import { Component, OnInit } from '@angular/core';

import { OfertasService } from 'src/app/services/ofertas.service';
import { Oferta } from 'src/app/shared/oferta.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  public ofertas: Array<Oferta> | any

  constructor(
    private ofertasService: OfertasService) { }

  ngOnInit() {

    this.ofertasService.getOfertas().subscribe(
      (res) => this.ofertas = res,
      (error) => error
    )
  }
}

