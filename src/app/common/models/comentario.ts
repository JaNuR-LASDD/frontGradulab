import {Usuario} from './usuario';
import {Publicacion} from './publicacion';

export class Comentario{
  id: number;
  descripcion: string;
  publicacion: Publicacion = new Publicacion();
  usuario: Usuario = new Usuario();
}
