import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PanelControlComponent } from './components/panel-control/panel-control.component';
import { ListadoVideojuegosComponent } from './components/panel-control/listadoVideojuegos/listadoVideojuegos.component';
import { VerDetalleVideojuegoComponent } from './components/panel-control/verDetalleVideojuego/verDetalleVideojuego.component';

const routes: Routes = [

{
  path : '', component : LoginComponent
},
{
  path : 'panel-control',
  component : PanelControlComponent,
  //Añadimos rutas hijas dentro del componente panel de control para poder llegar
  //al router-outlet interno de ese componente.
  children: [
    {path: 'listado-videojuegos', component: ListadoVideojuegosComponent},
    {path: 'ver-detalle', component: VerDetalleVideojuegoComponent},
    { path: '', redirectTo: 'listado-videojuegos', pathMatch: 'full' }// Ruta por defecto dentro de 'panel-control'
  ]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
