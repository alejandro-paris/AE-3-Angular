import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { ListaVideojuegosComponent } from './componentes/lista-videojuegos/lista-videojuegos.component';
import { FormsModule } from '@angular/forms';
import { ListaCompletaComponent } from './componentes/lista-completa/lista-completa.component';
import { SobreNosotrosComponent } from './componentes/sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListaVideojuegosComponent,
    ListaCompletaComponent,
    SobreNosotrosComponent,
    ContactoComponent
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
