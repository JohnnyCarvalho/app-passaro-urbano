import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { OfertasService } from 'src/app/services/ofertas.service';
import { Oferta } from 'src/app/shared/oferta.model';

import 'rxjs/internal/operators/switchMap'
import 'rxjs/internal/operators/debounceTime'
import { OfertasInterface } from 'src/app/interfaces/ofertas-interface';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ItemCarrinho } from 'src/app/shared/item-carrinho.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  public ofertas: OfertasInterface | any
  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(){
    
    
    // this.ofertasService.pesquisaOferta(this.route.snapshot.params['id'])
    // .subscribe(
    //   (res) => this.ofertas = res,
    //   (error) => error
    // )
    // return this.ofertas
  }

  public pesquisa(termoDaBusca: string) {

     this.ofertas = this.ofertasService.pesquisaOferta(termoDaBusca);
     
     console.log(this.ofertas);

     this.ofertas.subscribe(
      (ofertas: Array<Oferta>) => console.log(ofertas),
     )
  }
}
