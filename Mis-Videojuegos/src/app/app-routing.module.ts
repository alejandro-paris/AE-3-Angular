import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { SobreNosotrosComponent } from './componentes/sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { VideojuegosComponent } from './componentes/videojuegos/videojuegos.component';
import { DetallesVideojuegoComponent } from './componentes/detalles-videojuego/detalles-videojuego.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [

  {
    path : '',
    component : LoginComponent
  },
  {
    path : 'videojuegos',
    component : VideojuegosComponent
  },
  {
    path : 'sobre-nosotros',
    component : SobreNosotrosComponent
  },
  {
    path : 'contacto',
    component : ContactoComponent
  },
  {
    path : 'detalles',
    component : DetallesVideojuegoComponent
  },
  {
    path : 'usuarios',
    component : UsuariosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
