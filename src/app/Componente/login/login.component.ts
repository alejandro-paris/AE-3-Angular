import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Entidad/usuario';
import { UsuariosService } from 'src/app/servicios/Usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input () usuario : Usuario;
  listaUsuarios : Usuario [] = []

  //Propiedades TWB
  inputUser = "";
  inputPass = "";

  //PropiedadesTB
  usuarioCorrecto = true;
  contrasenaCorrecta = true;

  constructor(private _usuarioService : UsuariosService, private router: Router) { 

    this._usuarioService = _usuarioService
    
  }

  ngOnInit(): void {
    this.listaUsuarios = this._usuarioService.listar()
  }
/**
Método que comprueba si el usuario y la contraseña son correctos.
Si todo es correcto, dirige al usuario a la pagina principal(Listado de videojuegos) le transmite el nombre de usuario.
Además activa en el HTML los campos de error que señalan dónde se
ha equivocado el usuario.
@returns - true: Si usuario y contraseña son correctos
false: Si usuario y contraseña no son correctos.
*/
  public esValidoLogin():boolean {  
    for (let i = 0; i < this.listaUsuarios.length; i++) {

      if (this.inputUser === this.listaUsuarios[i].user) {
          this.usuarioCorrecto = true

        if(this.inputPass === this.listaUsuarios[i].pass) {
          this.contrasenaCorrecta = true;
          this.router.navigateByUrl(`/listado?nombre=${this.inputUser}`);
          return true;

        } else {
          this.contrasenaCorrecta = false;
          return false;
        }

      }        
    }
    //En el caso de que el usuario no exista, llega a este punto.
    this.usuarioCorrecto = false;
    return false;
  
  }

}
