import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from 'src/app/models/students/student';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  private apiUrl = 'http://tu-api.com/estudiantes'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  crearEstudiante(codigo: string, nombre: string, apellido: string, tipoDocumento: string, numeroDocumento: string, estado: string, genero: string) {
    const estudiante = { codigo, nombre, apellido, tipoDocumento, numeroDocumento, estado, genero };
    return this.http.post(this.apiUrl, estudiante);
  }

  editarEstudiante(estudiante: Student) {
    const updateData: Partial<Student> = {};
    for (const prop in estudiante) {
      if (estudiante[prop as keyof Student] !== null) {
        updateData[prop as keyof Student] = estudiante[prop as keyof Student];
      }
    }
    const url = `${this.apiUrl}/${estudiante.Code}`;
    return this.http.patch(url, updateData);
  }

  desactivarEstudiante(codigo: string) {
    const url = `${this.apiUrl}/${codigo}`;
    return this.http.post(url, { estado: 'inactivo' });
  }
}
