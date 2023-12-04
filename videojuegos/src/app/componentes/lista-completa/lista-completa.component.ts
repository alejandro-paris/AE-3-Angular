import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-completa',
  templateUrl: './lista-completa.component.html',
  styleUrls: ['./lista-completa.component.css']
})
export class ListaCompletaComponent implements OnInit {
  
  listaVideo = [
    {id: 1,titulo:'Legend of Adventure',compania: 'Game Studios XYZ',imagen: 'legend_of_adventure.jpg',  valoracionMedia: 4.7},
    {id: 2,titulo: 'Galactic Battlefront',compania: 'Space Gaming Co.',imagen: 'galactic_battlefront.jpg',valoracionMedia: 4.2},
    {id: 3,titulo: 'Fantasy Quest IX',compania: 'Epic Games Unlimited',imagen: 'fantasy_quest_ix.jpg',valoracionMedia: 4.9},
    {id: 4,titulo: 'Cyberpunk Revolution', compania: 'Future Entertainment Systems',imagen: 'cyberpunk_revolution.jpg',valoracionMedia: 3.8},
    {id: 5,titulo: 'Mystical Realms Online',compania: 'Virtual Realms Interactive',imagen: 'mystical_realms_online.jpg',valoracionMedia: 4.5}



 ]

  constructor() { }

  ngOnInit(): void {
  }

}
