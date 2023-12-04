import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/Entidad/videojuego';
import { VideojuegoService } from 'src/app/servicios/videojuego.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-listado-videojuegos',
  templateUrl: './listado-videojuegos.component.html',
  styleUrls: ['./listado-videojuegos.component.css']
})
export class ListadoVideojuegosComponent implements OnInit {
  
//Lista de videojuegos para mostrar en el Html
  listaVideojuegos : Videojuego[] = []
//Atributos de los videojuegos que utilizamos en Html
  id : number = 0
  titulo : String = ""
  compañia : String = ""
  valoracionMedia : number = 0
//Usuario con el que se inicia la sesion 
  usuarioActual : string =""

//Iniciamos constructor y llamamos al servicio del videojuego para traer el listado de juegos.
  constructor (

    private _videojuegoService : VideojuegoService, 
    private router: Router, 
    private routerActive : ActivatedRoute

    ) {
    this._videojuegoService = _videojuegoService
    this.listaVideojuegos = _videojuegoService.listar()
    this.usuarioActual = routerActive.snapshot.queryParams["nombre"]
  }

  
  public seleccionar(idVideojuego : number) : void{

    let videojuego = this._videojuegoService.acceder(idVideojuego)

  }

  ngOnInit(): void {
    
  }
//Metodo que se ejecuta en Html para redirecccionar a ver detalle del videojuego. El parametro llega desde el Html
  verDetalle(id:number):void {
    this.router.navigate(['/videojuego',id])
  }

}
