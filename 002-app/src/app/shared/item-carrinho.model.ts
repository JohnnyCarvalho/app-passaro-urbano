export class ItemCarrinho {

    constructor(
        public id: number,
        public img: object | any,
        public titulo: string,
        public descricao_oferta: string,
        public valor: number,
        public quntidade: number
    ) { }
}