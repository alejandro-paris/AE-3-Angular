import { Injectable } from '@angular/core';
import { Videojuego } from '../Entidad/videojuego';

@Injectable({
  providedIn: 'root'
})
export class VideojuegoService {

  private contadorId : number = 1;
  private listaVideojuegos : Videojuego[] = []

  constructor() { 
    let videojuego : Videojuego = new Videojuego()
    videojuego.id = this.contadorId++
    videojuego.titulo = "Assetto Corsa"
    videojuego.compania = "EA"
    videojuego.imagen = "./assets/img/asc.jpg"
    videojuego.valoracionMedia = 4
    this.listaVideojuegos.push(videojuego)

    videojuego = new Videojuego()
    videojuego.id = this.contadorId++
    videojuego.titulo = "Red Dead Redemption 2"
    videojuego.compania ="Rockstar"
    videojuego.imagen = "./assets/img/rdr2.jpg"
    videojuego.valoracionMedia= 5
    this.listaVideojuegos.push(videojuego)

    videojuego = new Videojuego()
    videojuego.id = this.contadorId++
    videojuego.titulo = "F1 2023"
    videojuego.compania ="CodeMasters"
    videojuego.imagen = "./assets/img/f123.jpg"
    videojuego.valoracionMedia= 3
    this.listaVideojuegos.push(videojuego)

    videojuego = new Videojuego()
    videojuego.id = this.contadorId++
    videojuego.titulo = "WRC 6"
    videojuego.compania ="BigBen"
    videojuego.imagen = "./assets/img/wrc.jpg"
    videojuego.valoracionMedia= 5
    this.listaVideojuegos.push(videojuego)
  }

  public acceder (id : number) : Videojuego | null {
    for (let a = 0; a<this.listaVideojuegos.length; a++){
      if(this.listaVideojuegos[a].id == id){
        return this.listaVideojuegos[a]
      }
    }
    return null
  }

  public listar() : Videojuego[]{
    return this.listaVideojuegos
  }



} 
