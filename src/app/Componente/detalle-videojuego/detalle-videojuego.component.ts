import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Videojuego } from 'src/app/Entidad/videojuego';
import { VideojuegoService } from 'src/app/servicios/videojuego.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-videojuego',
  templateUrl: './detalle-videojuego.component.html',
  styleUrls: ['./detalle-videojuego.component.css']
})
export class DetalleVideojuegoComponent implements OnInit {

  @Input() videojuego : Videojuego;

  constructor(
    
    private route: ActivatedRoute,
    private router: Router,
    private videojuegosService: VideojuegoService) {
  }

  ngOnInit() {
    this.obtenerDetallesVideojuego();
  }

  obtenerDetallesVideojuego(): void {

    const id = +this.route.snapshot.paramMap.get('id')!;
    this.videojuego = this.videojuegosService.acceder(id)!;
  }

  volverAlListado(): void {
    // Navega de nuevo al listado de videojuegos
    this.router.navigate(['/']);
  }

}
