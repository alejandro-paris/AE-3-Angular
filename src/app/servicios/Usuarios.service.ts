import { Injectable } from '@angular/core';
import { Usuario } from '../Entidad/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private listaUsuarios : Usuario[] = []

  constructor() {

    let usuario : Usuario = new Usuario()
    usuario.user = "javier"
    usuario.pass = "javier"
    this.listaUsuarios.push(usuario)

    usuario = new Usuario()
    usuario.user = "maria"
    usuario.pass = "maria"
    this.listaUsuarios.push(usuario)

    usuario = new Usuario()
    usuario.user = "alejandro"
    usuario.pass = "alejandro"
    this.listaUsuarios.push(usuario)

    usuario = new Usuario()
    usuario.user = "mikel"
    usuario.pass = "mikel"
    this.listaUsuarios.push(usuario)

    usuario = new Usuario()
    usuario.user = "felix"
    usuario.pass = "felix"
    this.listaUsuarios.push(usuario)
   }

//metodo que devuelve la lista de usuarios.
   public listar() : Usuario[]{
    return this.listaUsuarios
  }
}
