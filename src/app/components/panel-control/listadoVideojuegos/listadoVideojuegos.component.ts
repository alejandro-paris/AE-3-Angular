import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Videojuego } from 'src/app/entities/videojuego';

@Component({
  selector: 'app-listadoVideojuegos',
  templateUrl: './listadoVideojuegos.component.html',
  styleUrls: ['./listadoVideojuegos.component.css']
})
export class ListadoVideojuegosComponent implements OnInit {


  listaVideojuegos : Array<Videojuego> = [];


  constructor() { 

    let videojuego = new Videojuego("FIFA 28", "EA Sports", "logo-fifa-webbp",7);
    this.listaVideojuegos.push(videojuego);

    videojuego = new Videojuego("Nintendogs", "Nintendo", "logo-nintedogs.jpg",7.5);
    this.listaVideojuegos.push(videojuego);

    videojuego = new Videojuego("Zelda Breath of the Wild", "Nintendo", "logo-zelda_breath_of_the_wild.jpeg",10);
    this.listaVideojuegos.push(videojuego);

    videojuego = new Videojuego("League of Legends", "Riot Games", "logo-zelda_breath_of_the_wild.jpeg",8.5);
    this.listaVideojuegos.push(videojuego);
  };
  ngOnInit() {
    
  }

}
