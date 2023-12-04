import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Videojuego } from 'src/app/entities/videojuego';
import { VideojuegoService } from 'src/app/services/videojuego.service';

@Component({
  selector: 'app-listadoVideojuegos',
  templateUrl: './listadoVideojuegos.component.html',
  styleUrls: ['./listadoVideojuegos.component.css']
})
export class ListadoVideojuegosComponent implements OnInit {


  listaVideojuegos : Array<Videojuego> = [];


  constructor(private _videojuego : VideojuegoService, private router : Router) { 
    this._videojuego = _videojuego;
    this.listaVideojuegos = _videojuego.listar();
  };
  ngOnInit() {
    
  }

  /**
   * Este método sirve para redirigir al usuario a la página verDetalle,
   * añadiendo en la URL el id del objeto que tiene que recuperar. 
   * @param id El id del objeto sobre el que el usuario hace clic. Nos lo
   *           envia el HTML. 
   */
  public verDetalle(id:number):void {
    this.router.navigateByUrl(`panel-control/ver-detalle?id=${id}`)
  }

}
