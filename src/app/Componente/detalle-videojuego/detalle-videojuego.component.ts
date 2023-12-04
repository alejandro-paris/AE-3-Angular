import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Videojuego } from 'src/app/Entidad/videojuego';
import { VideojuegoService } from 'src/app/servicios/videojuego.service';

@Component({
  selector: 'app-detalle-videojuego',
  templateUrl: './detalle-videojuego.component.html',
  styleUrls: ['./detalle-videojuego.component.css']
})
export class DetalleVideojuegoComponent implements OnInit {
// Propiedad de entrada para recibir el Objeto Videojuego desde el componente padre
  @Input() videojuego : Videojuego;
//Constructor del componente, inyectando ACtivateRoute y VideojuegoService
  constructor(
    
    private route: ActivatedRoute,
    private videojuegosService: VideojuegoService) {
  }

  ngOnInit() {
    this.obtenerDetallesVideojuego();
  }
//Método para obtener detalles del videojuego.
  obtenerDetallesVideojuego(): void {
 //Añadimos la ! al final para indicar que el parametro no es nulo 
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.videojuego = this.videojuegosService.acceder(id)!;
  }

}
