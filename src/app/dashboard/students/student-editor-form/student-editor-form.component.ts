import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Document {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-student-editor-form',
  templateUrl: './student-editor-form.component.html',
  styleUrls: ['./student-editor-form.component.css']
})
export class StudentEditorFormComponent {

  constructor(private router: Router) { }

  volver() {
    this.router.navigate(['tablaEstudiantes']);
  }

  code: string | null = null;
  fullName: string | null = null;
  lastName: string | null = null;
  documentType: string | null = null;
  documentNumber: string | null = null;
  actualStatus: string | null = null;
  gender: string | null = null;
  image: string | null = null;

  types: Document[] = [
    {value: 'CC', viewValue: 'Cedula de ciudadania'},
    {value: 'TI', viewValue: 'Tarjeta de identidad'},
    {value: 'PA', viewValue: 'Pasaporte'},
  ];

  // Función para manejar la carga de imagen
  handleImageInput() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.files && target.files[0]) {
        const reader = new FileReader();
        reader.readAsDataURL(target.files[0]);
        reader.onload = () => {
          this.image = reader.result as string;
        };
      }
    };
    input.click();
  }

  // Función para subir la imagen al servidor
  uploadImage() {
    // Verificamos si se ha cargado una imagen
    if (this.image) {
      // Enviamos la imagen al servidor usando una petición HTTP
      // Aquí deberás implementar la lógica para subir la imagen al servidor
      console.log("Imagen cargada: ", this.image);
    }
  }
}
