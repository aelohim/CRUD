import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  toppingList: string[] = ['Masculino', 'Femenino', 'Sin determinar'];

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private _usuarioService: UsuarioService,
              private router: Router) {
    this.form = this.fb.group ({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }
  agregarUsuario() {

    const user: Usuario = {
      usuario: this.form.value.usuario,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      sexo: this.form.value.sexo,
    }
    this._usuarioService.agregarUsuarios(user);
    this.router.navigate(['/dashboard/usuarios'])
  }
}
