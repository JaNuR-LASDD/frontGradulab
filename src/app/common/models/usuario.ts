import {Persona} from './persona';

export  class Usuario{
    id: number;
    login: string;
    contrasena: string;
    habilitado: string;
    persona: Persona = new Persona();
    roles: string[] = [];
}
