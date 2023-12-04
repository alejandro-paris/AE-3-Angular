import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listaUsuarios : Usuario [] = [];
  usuario : Usuario | null = null;

  constructor() {
    let usuario = new Usuario("tomas","tomasin");
    this.listaUsuarios.push(usuario);
    usuario = new Usuario ("eva", "evita");
    this.listaUsuarios.push(usuario);
   }

  nombre : string = "";
  password : string = "";

/**
 * Método para añadir un nuevo usuario al array listaUsuarios
 */
  public altaUsuario(){
    this.usuario = new Usuario(this.nombre, this.password);
    this.listaUsuarios.push(this.usuario);
    console.log("Usuario dado de alta")
  }

  public listarUsuarios () : Usuario []{
    return this.listaUsuarios;
  }
  ngOnInit() {
  }

}
