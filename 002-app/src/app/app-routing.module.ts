import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiversaoComponent } from './components/diversao/diversao.component';
import { HomeComponent } from './components/home/home.component';
import { OfertaComponent } from './components/oferta/oferta.component';
import { ComoUsarComponent } from './components/oferta/sub-components/como-usar/como-usar.component';
import { ContatosComponent } from './components/oferta/sub-components/contatos/contatos.component';
import { OndeFicaComponent } from './components/oferta/sub-components/onde-fica/onde-fica.component';
import { OrdemCompraComponent } from './components/ordem-compra/ordem-compra.component';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';

//CRIANDO ROTAS ENTRE PÁGINAS
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'restaurantes', component: RestaurantesComponent},
  {path: 'diversao', component: DiversaoComponent},
  {path: 'oferta', component: OfertaComponent},
  {path: 'oferta/:id', component: OfertaComponent, 
  // Componentes filhos de oferta, rotas filhas. . .
  children: [
    {path: '', component: ComoUsarComponent},
    {path: 'como-usar', component: ComoUsarComponent},
    {path: 'onde-fica', component: OndeFicaComponent},
    {path: 'contatos', component: ContatosComponent}
  ]},
  {path: 'ordem-compra', component: OrdemCompraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
