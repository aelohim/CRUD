import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  ListUsuario: Usuario[] = [
    {usuario:'Aelo', nombre: 'Aelohim', apellido: 'Ponce', sexo: 'Masculino'},
    {usuario:'Aelo', nombre: 'Aelohim', apellido: 'Ponce', sexo: 'Masculino'},
    {usuario:'Matias', nombre: 'Herrera', apellido: 'Ponce', sexo: 'Masculino'},
    {usuario:'Anael', nombre: 'Aelohim', apellido: 'Ponce', sexo: 'Masculino'}
  ]

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  dataSource = new MatTableDataSource(this.ListUsuario);
  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
