import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Videojuego } from 'src/app/entidades/videojuego';
import { VideojuegosService } from 'src/app/servicios/videojuegos.service';

@Component({
  selector: 'app-detalles-videojuego',
  templateUrl: './detalles-videojuego.component.html',
  styleUrls: ['./detalles-videojuego.component.css']
})
export class DetallesVideojuegoComponent implements OnInit {
  @Input() videojuego : Videojuego;



    constructor(private route : ActivatedRoute, private router : Router, private _videojuegoService : VideojuegosService){

    }

  ngOnInit() {
    this.detallesVideojuego();
  }

  public detallesVideojuego(){
    let id = +this.route.snapshot.paramMap.get('id')!;
    this.videojuego = this._videojuegoService.accederVideojuego(id)!;
  }

}
