import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/Entidad/videojuego';
import { VideojuegoService } from 'src/app/servicios/videojuego.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listado-videojuegos',
  templateUrl: './listado-videojuegos.component.html',
  styleUrls: ['./listado-videojuegos.component.css']
})
export class ListadoVideojuegosComponent implements OnInit {

  listaVideojuegos : Videojuego[] = []

  id : number = 0
  titulo : String = ""
  compañia : String = ""
  valoracionMedia : number = 0


  constructor(private _videojuegoService : VideojuegoService, private router: Router) {
    this._videojuegoService = _videojuegoService
    this.listaVideojuegos = _videojuegoService.listar()
  }

  public seleccionar(idVideojuego : number) : void{

    let videojuego = this._videojuegoService.acceder(idVideojuego)

    if(videojuego != null){
      
      console.log("seleccionar -> Heroe localizado")
    } else{
      console.log("seleccionar -> Heroe no encontado :(")
    }
  }

  ngOnInit(): void {
    
  }

  verDetalle(id:number):void {
    this.router.navigate(['/videojuego',id])
  }

}
