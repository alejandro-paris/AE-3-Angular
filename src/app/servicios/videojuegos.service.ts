import { Injectable } from '@angular/core';
import { Videojuego } from '../entidades/videojuego';

@Injectable({
  providedIn: 'root'
})
export class VideojuegosService {

  private contadorId : number =1;
  private listaVideojuegos : Videojuego[] = [];

  //creamos varios videojuegos y lo añadimos al array listaVideojuegos
  constructor() {
      let videojuego : Videojuego = new Videojuego();
      videojuego.id = this.contadorId++;
      videojuego.titulo = "The Witcher 3: Wild Hunt";
      videojuego.compania = "CD Projekt";
      videojuego.imagen = "./assets/img/img1.jpg";
      videojuego.valoracionMedia = 9;
      this.listaVideojuegos.push(videojuego);

      videojuego = new Videojuego();
      videojuego.id = this.contadorId++;
      videojuego.titulo = "Grand Theft Auto V";
      videojuego.compania = "Rockstar Games";
      videojuego.imagen = "./assets/img/img2.jpg";
      videojuego.valoracionMedia = 8.5;
      this.listaVideojuegos.push(videojuego);

      videojuego = new Videojuego();
      videojuego.id = this.contadorId++;
      videojuego.titulo = "Overwatch";
      videojuego.compania = "Blizzard Entertainment";
      videojuego.imagen = "./assets/img/img3.jpg";
      videojuego.valoracionMedia = 8.9;
      this.listaVideojuegos.push(videojuego);

      videojuego = new Videojuego();
      videojuego.id = this.contadorId++;
      videojuego.titulo = "The Legend of Zelda: Breath of the Wild";
      videojuego.compania = "Nintendo";
      videojuego.imagen = "./assets/img/img4.jpg";
      videojuego.valoracionMedia = 9.4;
      this.listaVideojuegos.push(videojuego);
   }

   /**
    * Método para insertar un nuevo videojuego a la listaVideojuegos
    * @param videojuego a añadir
    */
  public añadirVideojuego(videojuego : Videojuego){
    videojuego.id = this.contadorId
    this.listaVideojuegos.push(videojuego)
  }
  
  /**
   * Método que permite encontrar un videojuego según la concordancia de id con la listaVideojuegos
   * @param id 
   * @returns el videojuego que coincide con el id pasado, o null si no lo encuentra
   */
  public accederVideojuego (id : number) : Videojuego | null {
    for (let a=0; a<this.listaVideojuegos.length; a++){
      if (this.listaVideojuegos[a].id == id){
        console.log("Ha devuelto un videojuego que coincide con ese id")
        return this.listaVideojuegos[a]
      }
    }
    console.log("No se ha encontrado el videojuego")
    return  null;
  }
/**
 * Método que devuelve todos los videojuegos de listaVideojuegos
 * @returns lista de videojuegos
 */
  public listarVideojuegos() : Videojuego[]{
    return this.listaVideojuegos;
  }

  }
