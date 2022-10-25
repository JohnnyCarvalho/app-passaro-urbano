import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { OrdemCompraService } from 'src/app/services/ordem-compra.service';
import { ItemCarrinho } from 'src/app/shared/item-carrinho.model';
import { Pedido } from 'src/app/shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  /*
  providers: [OrdemCompraService, CarrinhoService]
  Não é mais necessário fazer isso, pois os nossos services estão apontando para o root da aplicação,
  ou seja, todos os componentes tem acesso.*/
})
export class OrdemCompraComponent implements OnInit {

  public itensCarrinho: Array<ItemCarrinho> = []

  public formulario: FormGroup = new FormGroup(
    {
      'endereco': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      'numero': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(7)]),
      'complemento': new FormControl(null),
      'formaPagamento': new FormControl(null, Validators.required)
    }
  )

  constructor(
    private ordemCompraService: OrdemCompraService,
    public carrinhoService: CarrinhoService

  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.exibirItens()
  }

  public confirmarCompra() {
    if (this.formulario.status === 'INVALID') {

      this.formulario.get('endereco')?.markAllAsTouched()
      this.formulario.get('numero')?.markAllAsTouched()
      // this.formulario.get('complemento')?.markAllAsTouched()
      this.formulario.get('formaPagamento')?.markAllAsTouched()
    }
    else if (this.carrinhoService.exibirItens().length === 0) {
      alert('Você não adicionou nenhum item!')
    }
    else {
      let pedido: Pedido = new Pedido(
        this.formulario.value.endereco,
        this.formulario.value.numero,
        this.formulario.value.complemento,
        this.formulario.value.formaPagamento,
        this.carrinhoService.exibirItens()
      )
      this.ordemCompraService.efetivarCompra(pedido)
        .subscribe(
          (resposta) => {
            pedido = resposta
          }
        )
        if (pedido) {
          alert(`Pedido efetuado com sucesso!`)
          this.carrinhoService
          this.carrinhoService.resetCarrinho()
        }
    }
  }
}


/** -----> COM A UTILIZAÇÃO DE FormsModule <----- */

  // @ViewChild('formulario')
  // public f: NgForm | any

  // public confirmarCompra(): void {
  //   console.log(this.f)
  //   let pedido: Pedido = new Pedido(
  //     this.f.value.endereco,
  //     this.f.value.numero,
  //     this.f.value.complemento,
  //     this.f.value.formaPagamento
  //     )
  //   this.ordemCompraService.efetivarCompra(pedido)
  //   .subscribe(
  //     (resposta) => {
  //       pedido = resposta
  //     })
  //     if (pedido) {
  //       alert(`Pedido efetuado com sucesso!`);
  //       console.log(pedido);
  //     }
  // }



/** -----> SEM A UTILIZAÇÃO DE FormsModule <----- */
// import { Component, OnInit } from '@angular/core';
// import { OrdemCompraService } from 'src/app/services/ordem-compra.service';
// import { Pedido } from 'src/app/shared/pedido.model';

// @Component({
//   selector: 'app-ordem-compra',
//   templateUrl: './ordem-compra.component.html',
//   styleUrls: ['./ordem-compra.component.css']
// })
// export class OrdemCompraComponent implements OnInit {


//   //Dados cadastro
//   public endereco: string = '';
//   public numero: string = '';
//   public complemento: string = '';
//   public formaPagamento: string = '';

//   //Atribuos de validação de campos
//   public enderecoValido: boolean | any;
//   public numeroValido: boolean | any;
//   public complementoValido: boolean | any;
//   public formaPagamentoValido: boolean | any;

//   //Atributos de validação estados primitivos dos formulários
//   public enderecoEstadoPrimitivo: boolean = true;
//   public numeroEstadoPrimitivo: boolean = true;
//   public complementoEstadoPrimitivo: boolean = true;
//   public formaPagamentoEstadoPrimitivo: boolean = true;

//   //Pedido
//   public pedido: Pedido = new Pedido('', '', '', '');

//   //Atributo para habilitar e desabilitar button
  //  public formEstado: string = 'disabled'

//   constructor(
//     private ordemCompraService: OrdemCompraService
//   ) { }

//   ngOnInit(): void {

//   }

//   //Methods

//   public atualizaEndereco(endereco: string): void {
//     this.endereco = endereco
//     console.log(endereco);

//     this.enderecoEstadoPrimitivo = false;

//     //Valida campo
//     if (this.endereco.length > 3) {
//       this.enderecoValido = true;
//     }
//     else {
//       this.enderecoValido = false;
//     }
//     this.habilitarForm()
//   }

//   public atualizaNumero(numero: string): void {
//     this.numero = numero
//     console.log(numero);

//     this.numeroEstadoPrimitivo = false;

//     //Valida campo
//     if (this.numero !== '') {
//       this.numeroValido = true;
//     }
//     else {
//       this.numeroValido = false;
//     }
//     this.habilitarForm()
//   }

//   public atualizaComplemento(complemento: string): void {
//     this.complemento = complemento
//     console.log(complemento);

//     this.complementoEstadoPrimitivo = false;

//     //Valida campo
//     if (this.complemento.length > 3) {
//       this.complementoValido = true;
//     }
//     this.habilitarForm()
//   }

//   public atualizaFormaPagamento(formaPagamento: string): void {
//     this.formaPagamento = formaPagamento
//     console.log(formaPagamento);

//     this.formaPagamentoEstadoPrimitivo = false;

//     //Valida campo
//     if (this.formaPagamento === 'dinheiro' || this.formaPagamento === 'debito') {
//       this.formaPagamentoValido = true;
//     }
//     else {
//       this.formaPagamentoValido = false;
//     }
//     this.habilitarForm()
//   }

//   public habilitarForm(): void {
//     if (this.enderecoValido === true && this.numeroValido === true && this.formaPagamentoValido === true) {
//       this.formEstado = ''
//     } else {
//       this.formEstado = 'disabled'

//     }
//   }

//   public confirmarCompra(pedido: Pedido) {

//     let id: number

//     this.pedido.endereco = this.endereco;
//     this.pedido.numero = this.numero;
//     this.pedido.complemento = this.complemento;
//     this.pedido.formaPagamento = this.formEstado

//     this.ordemCompraService.efetivarCompra(pedido)
//     .subscribe(
//       (res) => this.pedido = res
//     )
//     if (this.pedido) {
//       alert(`Pedido efetuado com sucesso!`);
//     }
//   }
// }
