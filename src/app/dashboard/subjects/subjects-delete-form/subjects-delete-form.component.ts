import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subjects-delete-form',
  templateUrl: './subjects-delete-form.component.html',
  styleUrls: ['./subjects-delete-form.component.css']
})
export class SubjectsDeleteFormComponent {

  constructor(private router: Router) { }

  volver() {
    this.router.navigate(['tablaMaterias']);
  }

  code: string | null = null;
  title: string | null = null;

}
