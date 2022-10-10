import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API } from "../api/app.api";
import { Pedido } from "../shared/pedido.model";


@Injectable({
    providedIn: 'root'
  })
export class OrdemCompraService {

    constructor(
        private http: HttpClient
    ) { }

    public efetivarCompra(pedido: Pedido): Observable<any> {
        
        return this.http.post(`${API}/pedidos`, {pedido: pedido})
        .pipe(
            res => res
        )
    }
}