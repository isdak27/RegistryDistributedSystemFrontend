import { Component } from '@angular/core';

@Component({
  selector: 'app-inscription-form-component',
  templateUrl: './inscription-form-component.component.html',
  styleUrls: ['./inscription-form-component.component.css']
})
export class InscriptionFormComponentComponent {
  studentCode: string | null = null;
  subjectCode: string | null = null;
  inscriptionDate: Date | undefined ;

}
