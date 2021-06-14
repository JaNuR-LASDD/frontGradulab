import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AdministradorService} from '../../../servicios/administrador.service';
import {AuthService} from '../../../servicios/auth.service';
import {Publicacion} from '../../../common/models/publicacion';
import Swal from 'sweetalert2';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {Subscription} from 'rxjs';
import {PublicacionesService} from '../../../servicios/publicaciones.service';
import {Usuario} from '../../../common/models/usuario';
import {environment} from '../../../../environments/environment';
import {Router} from '@angular/router';
import {Comentario} from "../../../common/models/comentario";

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit, OnDestroy {

  ultimaPublicacion: Publicacion;
  fotoSeleccionada: File;
  @ViewChild(CdkVirtualScrollViewport) scroller: CdkVirtualScrollViewport;
  myListSuscription$: Subscription;
  myCrearSuscription$: Subscription;
  myImagenSuscription$: Subscription;
  myMegusta$: Subscription;
  myEncanta$: Subscription;
  comentario$: Subscription;
  urlImage = environment.urlBase + 'archivo/obtener/img/';
  comentario: Comentario;


  myPublicaciones = {
    pageQuery: {
      page: 1,
      totalElements: 0
    },
    list: [],
    loading: true,
  };

  constructor(
    private adminService: AdministradorService,
    private authService: AuthService,
    private publi: PublicacionesService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.ultimaPublicacion = new Publicacion();
    this.comentario = new Comentario();
    this.getMyAddress(true);
  }

  publicarSinMultiomedia(){
    if (this.ultimaPublicacion.contenido === undefined && this.ultimaPublicacion.multimedia === undefined){
      Swal.fire('Error en el fromulario', 'no hay contenido', 'error');
      return;
    }
    if (this.ultimaPublicacion.usuario == null){
      this.ultimaPublicacion.usuario = new Usuario();
    }
    this.ultimaPublicacion.usuario.id = this.authService.usuario.id;
    this.myCrearSuscription$ = this.publi.crearPublicacion(this.ultimaPublicacion).subscribe(response => {
      this.ultimaPublicacion = response.body;
      this.publicar();
    });
  }

  seleccionarFoto(event): void{
    this.fotoSeleccionada = event.target.files[0];
  }


  publicar(): void {

    if (this.fotoSeleccionada !== undefined){
     this.myImagenSuscription$ = this.publi.subirImagen(this.fotoSeleccionada, this.ultimaPublicacion.id).subscribe(
        response => {
          Swal.fire('Has hecho una publicacion', '', 'success');
          this.router.navigate([this.router.url]);

        }, error => {
          if (error.status === 400){
            Swal.fire('Error al publicar', '', 'error');
          }
        }
      );
    }else {
      Swal.fire('Has hecho una publicacion', '', 'success');
      this.router.navigate([this.router.url]);
    }

  }

  meGusta(publicacion){
    this.myMegusta$ = this.publi.meGusta(publicacion).subscribe(
      res => {
        location.reload();
      }
    );
  }

  meEncanta(publicacion){
    this.myEncanta$ = this.publi.meEncanta(publicacion).subscribe(
      res => {
       location.reload();
      }
    );
  }

  comentar(publicacion){
    this.comentario.descripcion = publicacion.comentario;
    this.comentario.publicacion = publicacion;
    this.comentario.usuario = publicacion.usuario;
    this.comentario$ = this.publi.comentarPublicacion(this.comentario).subscribe(
      res => {
        this.comentario = new Comentario();
        this.router.navigate([this.router.url]);
      }
    );
  }
  clear(): void {
    this.ultimaPublicacion = null;
    this.fotoSeleccionada = null;
  }

  /**
   * Metodo encargado se seguir el evento scroll para
   * saber si se llego al ultimo elemento de la lista y
   * si hay mas elementos por cargar hace el llamado
   */
  onScroll() {
    if (this.scroller.getRenderedRange().end === this.scroller.getDataLength() && this.scroller.getDataLength() < this.myPublicaciones.pageQuery.totalElements) {
      this.getMyAddress(false);
    }
  }

  /**
   * Obtiene las direcciones del distribuidor
   * @param clean
   */
  getMyAddress(clean) {
    this.myPublicaciones.loading = true;
    if (clean) {
      this.myPublicaciones.pageQuery.page = 1;
    }
    this.myListSuscription$ = this.publi.getMyAddress(this.myPublicaciones.pageQuery).subscribe(
      response => {
        this.paginateList(clean, response.body);
      },
      reason => {
        Swal.fire('Error', 'no se pudo caragar listado', 'error');
      }
    );
  }

  /**
   * Se pagina el listado obtenido del servicio
   * @param clean
   * @param response
   */
  paginateList(clean, response) {
    if (clean) {
      this.myPublicaciones.list = response.content;
      this.myPublicaciones.pageQuery.totalElements = response.totalElements;
    } else {
      if (this.myPublicaciones.list.length < this.myPublicaciones.pageQuery.totalElements) {
        this.myPublicaciones.list = this.myPublicaciones.list.concat(response.content);
      }
    }
    if (this.myPublicaciones.pageQuery.page < response.totalPages) {
      this.myPublicaciones.pageQuery.page++;
      this.myPublicaciones.loading = false;
    }
  }

  ngOnDestroy() {
    if (this.myListSuscription$ != null){
      this.myListSuscription$.unsubscribe();
    }

    if(this.myCrearSuscription$ != null){
      this.myCrearSuscription$.unsubscribe();
    }

    if(this.myImagenSuscription$ != null){
      this.myImagenSuscription$.unsubscribe();
    }
    if(this.comentario$ != null){
      this.comentario$.unsubscribe();
    }

    if (this.myEncanta$ != null){
      this.myEncanta$.unsubscribe();
    }

    if(this.myMegusta$ != null){
      this.myMegusta$.unsubscribe();
    }
  }

}
