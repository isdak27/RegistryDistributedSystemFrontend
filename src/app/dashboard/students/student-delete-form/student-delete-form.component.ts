import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-delete-form',
  templateUrl: './student-delete-form.component.html',
  styleUrls: ['./student-delete-form.component.css']
})
export class StudentDeleteFormComponent {

  constructor(private router: Router) { }

  volver() {
    this.router.navigate(['tablaEstudiantes']);
  }

  code: string | null = null;
  documentType: string | null = null;
  documentNumber: string | null = null;
}
