import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Videojuego } from 'src/app/entities/videojuego';

@Component({
  selector: 'app-panel-control',
  templateUrl: './panel-control.component.html',
  styleUrls: ['./panel-control.component.css']
})
export class PanelControlComponent implements OnInit {

  usuarioSesion : string = "";

  constructor(route : ActivatedRoute) { 
    this.usuarioSesion = route.snapshot.queryParams["nombre-usuario"];    

  }

  ngOnInit() {
  }

}
