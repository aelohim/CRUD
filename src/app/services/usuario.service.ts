import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  ListUsuario: Usuario[] = [
    {usuario:'Aelo', nombre: 'Aelohim', apellido: 'Ponce', sexo: 'Masculino'},
    {usuario:'Aelo', nombre: 'Aelohim', apellido: 'Ponce', sexo: 'Masculino'},
    {usuario:'Matias', nombre: 'Herrera', apellido: 'Ponce', sexo: 'Masculino'},
    {usuario:'Anael', nombre: 'Aelohim', apellido: 'Ponce', sexo: 'Masculino'}
  ]

  constructor() { }

  getUsuarios(){
    return this.ListUsuario.slice();
  }

}
