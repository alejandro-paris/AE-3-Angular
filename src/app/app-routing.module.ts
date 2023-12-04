import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoVideojuegosComponent } from './Componente/listado-videojuegos/listado-videojuegos.component';
import { DetalleVideojuegoComponent } from './Componente/detalle-videojuego/detalle-videojuego.component';
import { ContactoComponent } from './Componente/contacto/contacto.component';
import { NosotrosComponent } from './Componente/nosotros/nosotros.component';

const routes: Routes = [

  {
    path:'',
    component : ListadoVideojuegosComponent
  },
  {
    path:'videojuego/:id', component: DetalleVideojuegoComponent
  },
  {
    path:'listaVideojuegos',
    component : ListadoVideojuegosComponent
  },
  {
    path:'contacto',
    component : ContactoComponent
  },
  {
    path:'nosotros',
    component : NosotrosComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
