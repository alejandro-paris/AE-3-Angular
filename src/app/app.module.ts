import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { VideojuegosComponent } from './componentes/videojuegos/videojuegos.component';
import { FormsModule } from '@angular/forms';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { SobreNosotrosComponent } from './componentes/sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { DetallesVideojuegoComponent } from './componentes/detalles-videojuego/detalles-videojuego.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { LoginComponent } from './componentes/login/login.component';


@NgModule({
  declarations: [	
    AppComponent,
      CabeceraComponent,
      VideojuegosComponent,
      NavegacionComponent,
      SobreNosotrosComponent,
      ContactoComponent,
      DetallesVideojuegoComponent,
      UsuariosComponent,
      LoginComponent
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
