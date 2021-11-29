import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  ListUsuario: Usuario[] = [
    {usuario:'Apon', nombre: 'Aelohim', apellido: 'Ponce', sexo: 'Masculino'},
    {usuario:'Anapon', nombre: 'Anael', apellido: 'Ponce', sexo: 'Masculino'},
    {usuario:'Mat32', nombre: 'Matias', apellido: 'Herrera', sexo: 'Masculino'},
    {usuario:'Sab21', nombre: 'Sabatiel', apellido: 'Ponce', sexo: 'Masculino'}
  ];

  constructor() { }

  getUsuarios(){
    return this.ListUsuario.slice();
  }

  eliminarUsuario(index: number) {
    this.ListUsuario.splice(index,1);
  }

  agregarUsuarios(usuario: Usuario){
    this.ListUsuario.unshift(usuario);
  }
}
