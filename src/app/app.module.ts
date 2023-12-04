import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoVideojuegosComponent } from './Componente/listado-videojuegos/listado-videojuegos.component';
import { DetalleVideojuegoComponent } from './Componente/detalle-videojuego/detalle-videojuego.component';
import { MenuComponent } from './Componente/menu/menu.component';
import { ContactoComponent } from './Componente/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoVideojuegosComponent,
    DetalleVideojuegoComponent,
    MenuComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
