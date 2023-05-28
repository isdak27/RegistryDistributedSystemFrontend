import { Component } from '@angular/core';

@Component({
  selector: 'app-subject-form-component',
  templateUrl: './subject-form-component.component.html',
  styleUrls: ['./subject-form-component.component.css']
})
export class SubjectFormComponentComponent {
  title: string | null = null;
  quotas: number | undefined;
  actualStatus: string | null = null;

}
