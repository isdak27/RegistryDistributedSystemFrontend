import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-component',
  templateUrl: './student-component.component.html',
  styleUrls: ['./student-component.component.css']
})
export class StudentComponentComponent {


  constructor(private router: Router) { }

  crear() {
    this.router.navigate(['formularioEstudiantes']);
  }

  buscar() {
    this.router.navigate(['tablaEstudiantes']);
  }

  desactivar() {
    this.router.navigate(['formularioDesactivacionEstudiantes']);
  }

}
