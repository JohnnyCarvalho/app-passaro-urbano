import { Injectable } from '@angular/core';
import { ItemCarrinho } from '../shared/item-carrinho.model';
import { Oferta } from '../shared/oferta.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  public itens: ItemCarrinho[] = []

  constructor() { }

  public exibirItens(): ItemCarrinho[] {
    return this.itens;
  }

  // Inclui itens no carrinho de compra
  public incluirItem(oferta: Oferta): void {

    let itemCarrinho: ItemCarrinho = new ItemCarrinho(
      oferta.id,
      oferta.imagens[0],
      oferta.titulo,
      oferta.descricao_oferta,
      oferta.valor,
      1
    )

    let itemEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)
    if (itemEncontrado) {
      itemEncontrado.quntidade +=1
    } 
    else {
      this.itens.push(itemCarrinho)
    }
  }

  // Caucula valor total da compra
  public totalValorCompra(): number {

    let valorTotal: number = 0;

    this.itens.map((item: ItemCarrinho) => {
      valorTotal = valorTotal + (item.valor * item.quntidade)
    })

    return valorTotal;
  }

  // inclui item a partir do botão +
  public adicionaItem(maisItem: ItemCarrinho): void {

    if (maisItem.quntidade > -1) {
      maisItem.quntidade = maisItem.quntidade +=1
    } 
  }

  // exclui item a partir do botão -
  public diminuiItem(menosItem: ItemCarrinho): void {

    if (menosItem.quntidade > 0) {
      menosItem.quntidade = menosItem.quntidade -=1
    }
  }


  public resetCarrinho(): void{
    this.itens = []
  }
  //Mensagem caso não haja item no carrinho
  // public carrinhoVazio(item: ItemCarrinho[]): void {
    
  //   if (item.length === 0) {
  //     console.log('incluir itens!');
      
  //   }
  // }
}
