import {Usuario} from './usuario';

export class Publicacion{
  id: number;
  contenido: string;
  multimedia: string;
  usuario: Usuario = new Usuario();
  enlaceVideo: string;
  cantidadMegusta: number;
  catidadMencanta: number;
  cantidadComentario: number;
  comentario: string;

}
