import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComoUsarEOndeFica } from 'src/app/interfaces/como-usar-eonde-fica';
import { OfertasService } from 'src/app/services/ofertas.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  public contatos: ComoUsarEOndeFica | any

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    
    this.ofertasService.getContatosDeOfertas(this.route.parent?.snapshot.params['id'])
    .subscribe(
      (contatos) => this.contatos =  contatos
    )
  }
}
