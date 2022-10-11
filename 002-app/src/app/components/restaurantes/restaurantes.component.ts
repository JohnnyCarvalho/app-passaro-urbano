import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/services/ofertas.service';
import { Oferta } from 'src/app/shared/oferta.model';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  public ofertas: Array<Oferta> | any

  




  constructor(
    private ofertasService: OfertasService,
  ) { }

  ngOnInit(): void {
    this.ofertasService.getOfertasPorCategoria('restaurante').subscribe(
      (res) => this.ofertas = res,
      (error) => error
    )
    // this.ofertaService.getOfertasPorCategoria('restaurantes')
    // .pipe(
    //   (res) => this.ofertas = res,
    //   (error) => error)
  }
}
