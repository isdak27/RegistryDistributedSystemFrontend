import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subjects-editor-form',
  templateUrl: './subjects-editor-form.component.html',
  styleUrls: ['./subjects-editor-form.component.css']
})
export class SubjectsEditorFormComponent {

  constructor(private router: Router) { }

  volver() {
    this.router.navigate(['tablaMaterias']);
  }
  title: string | null = null;
  quotas: number | undefined;
  actualStatus: string | null = null;
}
