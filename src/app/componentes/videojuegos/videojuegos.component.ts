import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';
import { Videojuego } from 'src/app/entidades/videojuego';
import { VideojuegosService } from 'src/app/servicios/videojuegos.service';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {

  //Creamos un array listaVideojuegos (vacio, []) para meter ahí todas las instancia videojuego
  listaVideojuegos : Videojuego[] = [];

    //datos recogidos en el formulario
  id : number = 0;
  titulo : String = "";
  compania : String = "";
  imagen : string = "";
  valoracionMedia : number = 0;

  //implementamos el array listaVideojuegos gracias a  _videojuegoService.listarVideojuegos() de Videojuegos
  constructor(private _videojuegoService : VideojuegosService, private router : Router) { 
  this._videojuegoService = _videojuegoService;
    this.listaVideojuegos = _videojuegoService.listarVideojuegos();
  }
  
  public seleccionarVideojuego(idVideojuego : number) {
    let videojuego = this._videojuegoService.accederVideojuego(idVideojuego);
    if (videojuego != null){
      console.log("Videojuego encontrado")
    }else{
      console.log("No se ha encontrado el videojuego")
    }
  }

  /**
   * Método que nos redirige al componente detalles-videojuego
   * @param id 
   */
  public verDetalle (id :number) {
    this.router.navigate(['/detalles', id])
  }

  ngOnInit() {
  }



  
}
