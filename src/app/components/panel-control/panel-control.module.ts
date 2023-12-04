import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelControlComponent } from './panel-control.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ListadoVideojuegosComponent } from './listadoVideojuegos/listadoVideojuegos.component';

/**
 * Creamos este módulo para importar todos los componentes que vamos a utilizar
 * en el panel de control. Al ser un módulo fuera del módulo principal necesitamos
 *crear un nuevo modulo.
 */
@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [PanelControlComponent,
    CabeceraComponent,
    ListadoVideojuegosComponent
  ]
})
export class PanelControlModule { }
