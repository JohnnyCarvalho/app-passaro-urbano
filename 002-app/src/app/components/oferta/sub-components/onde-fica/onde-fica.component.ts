import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComoUsarEOndeFica } from 'src/app/interfaces/como-usar-eonde-fica';
import { OfertasService } from 'src/app/services/ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: ComoUsarEOndeFica | any

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    this.ofertasService.getOndeFicaOfertaPorId(this.route.parent?.snapshot.params['id'])
    .subscribe(
      (resposta) => this.ondeFica = resposta
    )
  }
}
