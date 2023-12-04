import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  listaUsarios = [
    {
    nombre:'Alejandro',
    contrasena:'Paris'
    },
    {
      nombre:'Javier',
      contrasena:'Cardeñosa'
    },
    {
      nombre:'Mikel',
      contrasena:'Ballesteros'
    },
    {
      nombre:'Maria',
      contrasena:'Nieva'
    }
  ];

  //Propiedades TWB
  inputUsuario = '';
  inputContrasena = '';

  //PropiedadesTB
  usuarioCorrecto = true;
  contrasenaCorrecta = true;

  constructor(private router : Router) {
   }

  ngOnInit() {
  }

  /**
   * Método que comprueba si el usuario y la contraseña son correctos. 
   * Además activa en el HTML los campos de error que señalan dónde se
   * ha equivocado el usuario.
   * @returns - true: Si usuario y contraseña son correctos
   *          - false: Si usuario y contraseña no son correctos
   */
  public esValidoLogin():boolean {
    for (let i = 0; i < this.listaUsarios.length; i++) {
      if (this.inputUsuario === this.listaUsarios[i].nombre) {
          this.usuarioCorrecto = true

        if(this.inputContrasena === this.listaUsarios[i].contrasena) {

          this.contrasenaCorrecta = true;
          this.router.navigateByUrl(`/panel-control?nombre-usuario=${this.inputUsuario}`);
          return true;

        } else {
          this.contrasenaCorrecta = false;
          return false;
        }

      }        
    }
    //Si llega aquí es porque el usuario no está en la lista
      this.usuarioCorrecto = false;
      return false;
    
  }

}
