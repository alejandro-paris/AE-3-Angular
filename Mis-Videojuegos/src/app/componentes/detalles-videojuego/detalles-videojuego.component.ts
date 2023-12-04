import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Videojuego } from 'src/app/entidades/videojuego';

@Component({
  selector: 'app-detalles-videojuego',
  templateUrl: './detalles-videojuego.component.html',
  styleUrls: ['./detalles-videojuego.component.css']
})
export class DetallesVideojuegoComponent implements OnInit {
  @Input() videojuego : Videojuego;

  paramQuery1 : string = "";;
  paramQuery2 : string = "";;
  paramQuery3 : string = "";;
  paramQuery4 : number = 0;
  paramQuery5 : number = 0;

    constructor(private router : ActivatedRoute){

      this.paramQuery1 = router.snapshot.queryParams['param1'],
      this.paramQuery2 = router.snapshot.queryParams['param2'],
      this.paramQuery3 = router.snapshot.queryParams['param3'],
      this.paramQuery4 = router.snapshot.queryParams['param4'],
      this.paramQuery5 = router.snapshot.queryParams['param5']
    }

  ngOnInit() {
  }

}
