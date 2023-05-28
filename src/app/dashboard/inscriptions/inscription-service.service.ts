import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inscription } from 'src/app/models/inscriptions/inscription';

@Injectable({
  providedIn: 'root'
})
export class InscriptionServiceService {

  private API_URL = 'http://example.com/api/inscriptions';

  constructor(private http: HttpClient) { }

  crearInscripcion(codigoEstudiante: number, codigoMateria: number, fecha: string): Observable<any> {
    const body = {
      codigoEstudiante: codigoEstudiante,
      codigoMateria: codigoMateria,
      fecha: fecha
    };
    return this.http.post(this.API_URL, body);
  }

  editarInscripcion(inscripcion: Inscription): Observable<any> {
    const body = {
      IdAut: inscripcion.IdAut,
      StudentCode: inscripcion.StudentCode,
      SubjectCode: inscripcion.SubjectCode,
      InscriptionDate: inscripcion.InscriptionDate.toISOString()
    };
    return this.http.patch(`${this.API_URL}/${inscripcion.IdAut}`, body);
  }

  desactivarInscripcion(codigoInscripcion: number): Observable<any> {
    const body = {
      codigoInscripcion: codigoInscripcion
    };
    return this.http.post(`${this.API_URL}/desactivar`, body);
  }

}

