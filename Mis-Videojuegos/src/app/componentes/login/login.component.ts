import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';
import { UsuariosComponent } from '../usuarios/usuarios.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   

  //datos recogidos del formulario
  username : string ="";
  pass : string="";

  //variables para *ngIf
  error : boolean = false;
  error2 : boolean = false;
  error3 : boolean = false;
  habilitar : boolean = false;

  //sacar los datos del array listaUsuarios
  //listaUsuarios : UsuariosComponent["listarUsuarios"]
  //listaaux : Usuario[] = []
  

 /**
  * Método que permite activar el botón para acceder a la parte de usuarios cuando el usuario ha sido validado (devuelve true)
  */
  public acceder(){
     if (this.validarUsuario() == true){
        console.log("activando boton acceder a usuarios")
        this.habilitar=true;
     }
  }

  /**
   * Método que compara el nombre y contraseña introducidos en los campos de texto, gracias a [(ngModel)] con los objetos
   * del array listaUsuarios del usuarios.componente
   * @returns true cuando ha validado el usuario
   * @returns false cuando no ha validado el ususario y contraseña
   */
  public validarUsuario():boolean{
    if (this.validarformulario() == true){
      console.log('Iniciando validar usuario')
      /*
      *Falta la validacion del usuario comparando el array listaUsuario del usuario.componente con los datos introducidos con [(ngMdogel)]
      */
      return true;
    }
    console.log("usuario y contraseña no validos")
    return false
  }

/**
 * Método que valida que estén rellenos los campos de usuario y contraseña
 * @returns false si falta algún campo y salta su mensaje de error, true si están los dos campos rellenos
 */
  public validarformulario() : boolean{
    if((this.username.trim().length == 0)&&(this.pass.trim().length == 0)) {
      console.log ("Usuario y contraseña no introducidos")
      this.error = true
      this.error2 = true
      this.vaciar()
      return false;
    }
    if (this.username.trim().length == 0){
      console.log ("Usuario no introducido")
      this.error = true
      this.error2 = false
      this.vaciar()
      return false;
    } else if(this.pass.trim().length == 0){
      console.log("Contraseña no introducida")
      this.error2 = true
      this.error = false
      this.vaciar()
      return false;
    }else {
      console.log("Datos introducidos correctamente")
      this.error = false
      this.error2 = false
      this.error3 = true
      return true;
    }
  }
  
  /**
   * Método que deja los campos de texto vacios
   */
  public vaciar(){
    this.username="";
    this.pass="";
  }

  constructor() { }

  ngOnInit() {
  }

}
