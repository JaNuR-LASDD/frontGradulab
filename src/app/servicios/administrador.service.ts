import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {Persona} from '../common/models/persona';
import {catchError} from 'rxjs/operators';
import {ReponseObject} from '../common/models/reponseObject';
import Swal from 'sweetalert2';
import {AuthService} from './auth.service';
import {environment} from '../../environments/environment';
import {Publicacion} from '../common/models/publicacion';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  private service = 'administrador/';
  private httpHeaaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(
    private http: HttpClient,
    private ruter: Router,
    private authService: AuthService,
    ) { }

  private noEstaAutorizado(e): boolean{
    if (e.status === 401){
      this.ruter.navigate(['/login']);
      this.authService.logout();
      return true;
    }
    if ( e.status === 403){
      Swal.fire('Acceso denegado', '', 'warning');
      this.ruter.navigate(['/inicio/dashboard']);
      this.authService.logout();
      return true;
    }
    return false;
  }
  public agregarAutorizationHeader(): HttpHeaders{
    const token = this.authService.token;
    if (token != null){
      return this.httpHeaaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaaders;
  }
  getPersona(): any{
    return this.http.get<ReponseObject<Persona>>(environment.urlBase + this.service + 'persona/per', {
      headers: this.agregarAutorizationHeader()
    }).pipe(
      catchError(e => {
        this.noEstaAutorizado(e);
        Swal.fire('Error al cargar', e.message, 'error');
        return throwError(e);
      })
    );
  }



}
