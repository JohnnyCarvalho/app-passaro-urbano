import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/services/ofertas.service';
import { Oferta } from 'src/app/shared/oferta.model';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css']
})
export class DiversaoComponent implements OnInit {

  public ofertas: Array<Oferta> | any

  //Variável para acesso a classe service
  constructor(
    private ofertasService: OfertasService) { }

  ngOnInit(): void {

    this.ofertasService.getOfertasPorCategoria('diversao').subscribe(
        (res) => this.ofertas = res,
        (error) => error
      )
  }
}
