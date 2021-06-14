import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-headerlogeado',
  templateUrl: './headerlogeado.component.html',
  styleUrls: ['./headerlogeado.component.css']
})
export class HeaderlogeadoComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  logout(): void{
    this.authService.logout();
    this.router.navigate(['/informacion']);
  }


}
