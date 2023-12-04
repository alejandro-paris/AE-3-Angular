import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';
import { Videojuego } from 'src/app/entidades/videojuego';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {

  //Creamos un array listaVideojuegos (vacio, []) para meter ahí todas las instancia videojuego
  listaVideojuegos : Videojuego[] = [];
  videojuego : Videojuego | null = null;

  //creamos dos videojuegos y los introducimos al array
  constructor(private router : Router) { 
    let videojuego : Videojuego = new Videojuego ("Spiderman","VJ S.A","imagen",7);
    this.listaVideojuegos.push(videojuego);
    videojuego = new Videojuego ("MarioBross","Japon SA","imagen",8);
    this.listaVideojuegos.push(videojuego);
  }



  //datos recogidos en el formulario de alta
  titulo : string ="";
  compania : string = "";
  imagen : string = "";
  valoracionMedia : number = 0;

 /**
 * Método para añadir un nuevo videojuego al array listaVideojuegos
 */
  public alta(){
    this.videojuego = new Videojuego(this.titulo,this.compania,this.imagen, this.valoracionMedia);
    console.log ("Dando de alta el videojuego");
    this.listaVideojuegos.push(this.videojuego);
    console.log ("Videojuego dado de alta")

  }

  //recogida de datos para routing
  
  

  //metodo para hacer el routing programatico y por QueryParams
  public routingProQuery() {
    this.router.navigateByUrl(`/detalles?param1=${this.titulo}&param2=${this.compania}&param3=${this.imagen}&param4=${this.valoracionMedia}`)
  }

  ngOnInit() {
  }



  
}
