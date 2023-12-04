import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Videojuego } from 'src/app/entities/videojuego';

@Component({
  selector: 'app-verDetalleVideojuego',
  templateUrl: './verDetalleVideojuego.component.html',
  styleUrls: ['./verDetalleVideojuego.component.css']
})
export class VerDetalleVideojuegoComponent implements OnInit {

  videojuego : Videojuego;

  constructor(route : ActivatedRoute) {

    this.videojuego = route.snapshot.queryParams["nombre"]

   }

  ngOnInit() {
  }

}
