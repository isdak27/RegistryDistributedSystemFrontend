import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject-component',
  templateUrl: './subject-component.component.html',
  styleUrls: ['./subject-component.component.css']
})
export class SubjectComponentComponent {
  constructor(private router: Router) { }

  crear() {
    this.router.navigate(['formularioMaterias']);
  }

  buscar() {
    this.router.navigate(['tablaMaterias']);
  }

  desactivar() {
    this.router.navigate(['formularioDesactivacionMaterias']);
  }
}
