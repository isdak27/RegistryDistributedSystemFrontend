import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inscriptions-editor-form',
  templateUrl: './inscriptions-editor-form.component.html',
  styleUrls: ['./inscriptions-editor-form.component.css']
})
export class InscriptionsEditorFormComponent {


  constructor(private router: Router) { }

  volver() {
    this.router.navigate(['tablaInscripciones']);
  }
  studentCode: string | null = null;
  subjectCode: string | null = null;
  inscriptionDate: Date | undefined ;
}
