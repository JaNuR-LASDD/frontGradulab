import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AdministradorService} from './servicios/administrador.service';
import {Persona} from './common/models/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontGradulab';
  totalAngularPackages;
  error;
  persona: Persona;

  constructor() { }
  ngOnInit(): void{
  }
}
