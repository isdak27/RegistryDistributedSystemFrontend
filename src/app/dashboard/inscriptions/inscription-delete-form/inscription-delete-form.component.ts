import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription-delete-form',
  templateUrl: './inscription-delete-form.component.html',
  styleUrls: ['./inscription-delete-form.component.css']
})
export class InscriptionDeleteFormComponent {

  constructor(private router: Router) { }

  volver() {
    this.router.navigate(['tablaInscripciones']);
  }
  inscriptionCode: string | null = null;
  studentCode: string | null = null;
  subjectCode: string | null = null;

}
