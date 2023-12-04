import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-videojuegos',
  templateUrl: './lista-videojuegos.component.html',
  styleUrls: ['./lista-videojuegos.component.css']
})
export class ListaVideojuegosComponent implements OnInit {

  idSeleccionado: number | null = null;
  
  seleccionarId(id: number): void {
    this.idSeleccionado = id;
  }

  listaVideo = [
     {id: 1,titulo:'Legend of Adventure',compañia: 'Game Studios XYZ',imagen: 'legend_of_adventure.jpg',  valoracionMedia: 4.7},
     {id: 2,titulo: 'Galactic Battlefront',compañia: 'Space Gaming Co.',imagen: 'galactic_battlefront.jpg',valoracionMedia: 4.2},
     {id: 3,titulo: 'Fantasy Quest IX',compañia: 'Epic Games Unlimited',imagen: 'fantasy_quest_ix.jpg',valoracionMedia: 4.9},
     {id: 4,titulo: 'Cyberpunk Revolution', compañia: 'Future Entertainment Systems',imagen: 'cyberpunk_revolution.jpg',valoracionMedia: 3.8},
     {id: 5,titulo: 'Mystical Realms Online',compañia: 'Virtual Realms Interactive',imagen: 'mystical_realms_online.jpg',valoracionMedia: 4.5}



  ]

  constructor() { }

  ngOnInit(): void {
  }

}

   
    
  
  