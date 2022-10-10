import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComoUsarEOndeFica } from 'src/app/interfaces/como-usar-eonde-fica';
import { OfertasService } from 'src/app/services/ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: ComoUsarEOndeFica | any

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    this.ofertasService.getComoUsarOfertaPorId(this.route.parent?.snapshot.params['id'])
    .subscribe(
      (descricao) => this.comoUsar = descricao
    )
  }
}
