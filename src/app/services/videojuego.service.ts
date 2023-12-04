import { Injectable } from '@angular/core';
import { Videojuego } from '../entities/videojuego';

@Injectable({
  providedIn: 'root'
})
export class VideojuegoService {

  private contadorId : number = 1;
  private listaVideojuegos : Videojuego[] = [];

constructor() {

  let videojuego = new Videojuego("FIFA 28", "EA Sports", "logo-fifa.webp",7);
  videojuego.id = this.contadorId++;
  this.listaVideojuegos.push(videojuego);

  videojuego = new Videojuego("Nintendogs", "Nintendo", "logo-nintendogs.jpg",7.5);
  videojuego.id = this.contadorId++;
  this.listaVideojuegos.push(videojuego);

  videojuego = new Videojuego("Zelda Breath of the Wild", "Nintendo", "logo-zelda_breath_of_the_wild.jpeg",10);
  videojuego.id = this.contadorId++;
  this.listaVideojuegos.push(videojuego);

  videojuego = new Videojuego("League of Legends", "Riot Games", "logo-league_of_legends.jpg",8.5);
  videojuego.id = this.contadorId++;
  this.listaVideojuegos.push(videojuego);

 }

   /**
   * Metodo que devuelve un Videojuego de la lista a partir de su id
   * @param id 
   * @returns el videojuego en caso de que hayamos encontrado su id, null en caso de que no exista el id
   * en la lista.
   */
   public acceder(id : number) : Videojuego | null{    
    for(let a=0; a<this.listaVideojuegos.length; a++){
      if( this.listaVideojuegos[a].id == id){
        return this.listaVideojuegos[a]
      }
    }
    return null//No debería darse nunca este caso
  }

  /**
   * Método que devuelve todos los videojuegos en una lista
   * @returns la lista de videojuegos
   */
  public listar(): Videojuego[]{
    return this.listaVideojuegos;
  }

  ngOnInit() {

  }

}
