import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'src/app/models/subjects/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {
  private apiUrl = 'https://ejemplo.com/api/materias';

  constructor(private http: HttpClient) { }

  crearMateria(nombre: string, capacidad: number, estado: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const materia = {
      nombre: nombre,
      capacidad: capacidad,
      estado: estado
    };

    return this.http.post(this.apiUrl, materia, httpOptions);
  }

  editarMateria(materia: Subject): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.patch(`${this.apiUrl}/${materia.Title}`, materia, httpOptions);
  }

  desactivarMateria(codigoMateria: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = {
      codigo: codigoMateria
    };
    return this.http.post(`${this.apiUrl}/desactivar`, body, httpOptions);
  }
}
