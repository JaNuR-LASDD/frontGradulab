import { Component, OnInit } from '@angular/core';
import {AdministradorService} from '../../servicios/administrador.service';
import {Persona} from '../../common/models/persona';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  persona: Persona;
  constructor( private adminService: AdministradorService) { }

  ngOnInit(): void {
    this.persona = new Persona();
    this.adminService.getPersona().subscribe(
     response => this.persona = response.body
     );
  }

}
