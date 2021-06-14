import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../common/models/usuario';
import Swal from 'sweetalert2';
import {AuthService} from '../../servicios/auth.service';
import {Router} from '@angular/router';
import {Persona} from '../../common/models/persona';

@Component({
  selector: 'app-logingraduado',
  templateUrl: './logingraduado.component.html',
  styleUrls: ['./logingraduado.component.css']
})
export class LogingraduadoComponent implements OnInit {
  usuario: Usuario;
  logGraduado= true;
  logEmpresa: boolean;
  logDirector: boolean;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
   // if (this.authService.estaAutenticado()){
    //  this.router.navigate(['/inicio/dashboard']);
    // }
    this.logGraduado = true;
    this.logDirector = false;
    this.logEmpresa = false;
  }

  cambiarLog(boGraduado, boDirector, boEmpresa): void{
    this.logGraduado = boGraduado;
    this.logDirector = boDirector;
    this.logEmpresa = boEmpresa;
  }

  login(): void {
    if (this.usuario.login === undefined || this.usuario.contrasena === undefined){
      Swal.fire('Error en el fromulario', 'cedula y contraseña vacias', 'error');
      return;
    }

    this.authService.login(this.usuario).subscribe(response => {
      this.authService.guardarUsuario(response.access_token);
      this.authService.guardarToken(response.access_token);
      let usuario = this.authService.usuario;
      if (this.authService.hasRol('ROLE_GRADUADO')){
        this.router.navigate(['/graduado/publicaciones']);
      }
      if (this.authService.hasRol('ROLE_DIRECTOR_PROGRAMA')){
        this.router.navigate(['/administrador/graduados']);
      }
      if (this.authService.hasRol('ROLE_EMPRESA')){
        this.router.navigate(['/empresa/ofertalabempr']);
      }
      Swal.fire('Inicio de sesion', `HoHla ${usuario.persona.nombre}, Has iniciado sesion con exito`, 'success');
    }, error => {
      if (error.status === 400){
        Swal.fire('Datos inavlidos', '', 'error');
      }
    });
  }

}
