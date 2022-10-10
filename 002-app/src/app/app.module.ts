import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { TopoComponent } from './components/topo/topo.component';
import { DiversaoComponent } from './components/diversao/diversao.component';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { OfertaComponent } from './components/oferta/oferta.component';
import { ComoUsarComponent } from './components/oferta/sub-components/como-usar/como-usar.component';
import { OndeFicaComponent } from './components/oferta/sub-components/onde-fica/onde-fica.component';
import { ContatosComponent } from './components/oferta/sub-components/contatos/contatos.component';
import { DescricaoReduzida } from './pipes/descricao-reduzida';
import { OrdemCompraComponent } from './components/ordem-compra/ordem-compra.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    DiversaoComponent,
    RestaurantesComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    ContatosComponent,
    DescricaoReduzida,
    OrdemCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
