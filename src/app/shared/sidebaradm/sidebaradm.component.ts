import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';

@Component({
  selector: 'app-sidebaradm',
  templateUrl: './sidebaradm.component.html',
  styleUrls: ['./sidebaradm.component.css']
})
export class SidebaradmComponent implements OnInit {

  constructor( public authService: AuthService) { }

  ngOnInit(): void {
  }


}
