import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoVideojuegosComponent } from './Componente/listado-videojuegos/listado-videojuegos.component';
import { DetalleVideojuegoComponent } from './Componente/detalle-videojuego/detalle-videojuego.component';
import { MenuComponent } from './Componente/menu/menu.component';
import { ContactoComponent } from './Componente/contacto/contacto.component';
import { NosotrosComponent } from './Componente/nosotros/nosotros.component';
import { LoginComponent } from './Componente/login/login.component';
import { FormsModule } from '@angular/forms';
import { CabeceraComponent } from './Componente/cabecera/cabecera.component';
import { FooterComponent } from './Componente/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoVideojuegosComponent,
    DetalleVideojuegoComponent,
    MenuComponent,
    ContactoComponent,
    NosotrosComponent,
    LoginComponent,
    CabeceraComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
