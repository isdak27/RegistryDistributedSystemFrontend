import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-view-form',
  templateUrl: './student-view-form.component.html',
  styleUrls: ['./student-view-form.component.css']
})
export class StudentViewFormComponent {

  constructor(private router: Router) { }

  volver() {
    this.router.navigate(['tablaEstudiantes']);
  }

}
