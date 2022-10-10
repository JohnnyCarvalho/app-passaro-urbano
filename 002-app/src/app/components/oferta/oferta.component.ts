import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasInterface } from 'src/app/interfaces/ofertas-interface';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { OfertasService } from 'src/app/services/ofertas.service';
import { Oferta } from 'src/app/shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit, OnDestroy {

  public ofertas: OfertasInterface | any

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
    this.ofertasService.getOfertaId(this.route.snapshot.params['id'])
    .subscribe(
      (res) => this.ofertas = res,
      (error) => error
    )
  }

  ngOnDestroy(): void {
    
   }



   //testes   
   public adicionarItemCarrinho(oferta: Oferta): void {
    this.carrinhoService.incluirItem(oferta)
    console.log(this.carrinhoService.exibirItens());
   }
}

