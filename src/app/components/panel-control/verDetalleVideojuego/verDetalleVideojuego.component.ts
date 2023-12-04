import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Videojuego } from 'src/app/entities/videojuego';
import { VideojuegoService } from 'src/app/services/videojuego.service';

@Component({
  selector: 'app-verDetalleVideojuego',
  templateUrl: './verDetalleVideojuego.component.html',
  styleUrls: ['./verDetalleVideojuego.component.css']
})
export class VerDetalleVideojuegoComponent implements OnInit {

  videojuego : Videojuego;
  rutaVideojuego : string = "";

  constructor(private videojuegoService : VideojuegoService, route : ActivatedRoute) {

    this.videojuego = videojuegoService.acceder(route.snapshot.queryParams["id"])!;
    this.rutaVideojuego = `./assets/img/${this.videojuego.imagen}`;

   }

  ngOnInit() {
  }

}
