import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

//Interface
import { OfertasInterface } from "../interfaces/ofertas-interface";
import { ComoUsarEOndeFica } from "../interfaces/como-usar-eonde-fica";

//API
import { API } from "../api/app.api";
import { Oferta } from "../shared/oferta.model";



@Injectable({
    providedIn: 'root'
})
export class OfertasService {
    [x: string]: any;

    public itensOferta: Oferta[] = []

    constructor(
        private http: HttpClient
    ) { }

    //Separando ofertas ativas das inativas 'treu or false'
    public getOfertas(): Observable<OfertasInterface> {

        //efetuar uma requisição http
        return this.http.get<OfertasInterface>(`${API}/ofertas?destaque=true`)
        .pipe(
            res => res,
            error => error
        )
    }

    //Separando ofertas por categoria
    public getOfertasPorCategoria(categoria: string): Observable<OfertasInterface> {

        //efetuar requisição http
        return this.http.get<OfertasInterface>(`${API}/ofertas?categoria=${categoria}`)
        .pipe(
            res => res,
            error => error
        )
    }

    //Separando ofertas por ID
    public getOfertaId(id: number): Observable<OfertasInterface> {

        //efetuar requisição http
        return this.http.get<OfertasInterface>(`${API}/ofertas?id=${id}`)
        .pipe(
            res => res,
            error => error
        )
    }

    //Referência aos botão abaixo de cada oferta, neste caso 'Como usar'
    public getComoUsarOfertaPorId(id: number): Observable<ComoUsarEOndeFica> {

        //efetuar requisição http
        return this.http.get<ComoUsarEOndeFica>(`${API}/como-usar?id=${id}`)
        .pipe(
            res => res
        )
    }

    //Referência aos botão abaixo de cada oferta, neste caso 'Onde fica'
    public getOndeFicaOfertaPorId(id: number): Observable<ComoUsarEOndeFica> {

        //Efetuar requisição http
        return this.http.get<ComoUsarEOndeFica>(`${API}/onde-fica?id=${id}`)
        .pipe(
            res => res
        )
    }

    //Referência aos botão abaixo de cada oferta, neste caso 'Contatos'
    public getContatosDeOfertas(id: number): Observable<ComoUsarEOndeFica> {

        //Efetuar requisição http
        return this.http.get<ComoUsarEOndeFica>(`${API}/contatos?id=${id}`)
        .pipe(
            res => res
        )
    }

    //Referência a barra de pesquisa
    public pesquisaOferta(termo: string): Observable<Oferta[]> {

    //     //Efetuar requisição http
        return this.http.get<Oferta[]>(`${API}/ofertas?descricao_oferta_like=${termo}`)
        .pipe(
            res => res
        )

    }

    public exibirItensOferta(oferta: Oferta[]): void {
        this.itensOferta = oferta
    }
}
