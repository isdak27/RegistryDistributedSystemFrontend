import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription-component',
  templateUrl: './inscription-component.component.html',
  styleUrls: ['./inscription-component.component.css']
})
export class InscriptionComponentComponent {

  constructor(private router: Router) { }

  crear() {
    this.router.navigate(['formularioInscripciones']);
  }

  buscar() {
    this.router.navigate(['tablaInscripciones']);
  }

  desactivar() {
    this.router.navigate(['formularioDesactivacionInscripciones']);
  }
}
