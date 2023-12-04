import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaVideojuegosComponent } from './componentes/lista-videojuegos/lista-videojuegos.component';
import { ListaCompletaComponent } from './componentes/lista-completa/lista-completa.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { SobreNosotrosComponent } from './componentes/sobre-nosotros/sobre-nosotros.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';

// app-routing.module.ts
const routes: Routes = [
  { path: 'listavideo', component: ListaVideojuegosComponent },
  { path: 'detalle/:id', component: ListaCompletaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
