import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTES

import {OpticaPastoComponent} from './components/optica-pasto/optica-pasto.component';
import {PruebaComponent} from './components/prueba/prueba.component';
import {InicioComponent} from './components/inicio/inicio.component';

const routes: Routes = [
  {path: 'inicio', component : InicioComponent},
  {path: '', component : InicioComponent},
  {path: 'optica', component : OpticaPastoComponent},
  {path: 'prueba', component: PruebaComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
