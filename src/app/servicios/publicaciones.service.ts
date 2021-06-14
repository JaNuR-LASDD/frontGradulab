import { Injectable } from '@angular/core';
import {Publicacion} from '../common/models/publicacion';
import {ReponseObject} from '../common/models/reponseObject';
import {Persona} from '../common/models/persona';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {AdministradorService} from './administrador.service';
import {Comentario} from "../common/models/comentario";

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  constructor(
    private http: HttpClient,
    private ruter: Router,
    private authService: AuthService,
    private adminService: AdministradorService,
  ) { }


  crearPublicacion(publica: Publicacion): any{
    return this.http.post<ReponseObject<Publicacion>>(environment.urlBase + 'publicacion/crear', publica, {
      headers: this.adminService.agregarAutorizationHeader()
    }).pipe(
      catchError(e => {
        Swal.fire('Error al cargar', e.message, 'error');
        return throwError(e);
      })
    );
  }

  getMyAddress(pageQuery): any {
    const params = pageQuery;
    return this.http.get<ReponseObject<Publicacion>>(`${environment.urlBase}publicacion/listar`, {params} )
      .pipe(
        catchError(e => {
          console.log(e.message);
          Swal.fire('Error al cargar', e.message, 'error');
          return throwError(e);
        })
      );
  }

  subirImagen(archivo: File, id): Observable<Publicacion>{
    let formData = new FormData();
    formData.append("archivo", archivo);
    formData.append('id', id);
    return this.http.post<ReponseObject<Publicacion>>(`${environment.urlBase}publicacion/subir/imaben`, formData)
      .pipe(
        map((response: any) => response.publicacion as Publicacion),
        catchError(e => {
          Swal.fire('Error al cargar', e.message, 'error');
          return throwError(e);
        })
      );
  }

  meGusta(publicacion: Publicacion){
    return this.http.post(`${environment.urlBase}publicacion/megusta`, publicacion).pipe(
      catchError(e => {
        Swal.fire('Error al cargar', e.message, 'error');
        return throwError(e);
      })
    );
  }

  meEncanta(publicacion: Publicacion){
    return this.http.post(`${environment.urlBase}publicacion/meencanta`, publicacion).pipe(
      catchError(e => {
        Swal.fire('Error al cargar', e.message, 'error');
        return throwError(e);
      })
    );
  }

  comentarPublicacion(comentario: Comentario): any{
    return this.http.post<ReponseObject<Comentario>>(environment.urlBase + 'publicacion/crear', comentario).pipe(
      catchError(e => {
        Swal.fire('Error al cargar', e.message, 'error');
        return throwError(e);
      })
    );
  }

}
