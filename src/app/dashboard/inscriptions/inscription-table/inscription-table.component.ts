import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-inscription-table',
  templateUrl: './inscription-table.component.html',
  styleUrls: ['./inscription-table.component.css']
})
export class InscriptionTableComponent {

  constructor(private router: Router) { }

  editar() {
    this.router.navigate(['formularioEditarInscripciones']);
  }

  desactivar() {
    this.router.navigate(['formularioDesactivacionInscripciones']);
  }

  displayedColumns = ['codigo estudiante', 'nombre completo', 'materia', 'fecha inscripcion', 'acciones'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;


  applyFilter(filterValue: string): void {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  descargarExcel(): void {
    // Crea un objeto Blob con el contenido a descargar
    const blob = new Blob([this.convertirAExcel()], { type: 'application/vnd.ms-excel' });

    // Usa la librería FileSaver.js para descargar el archivo
    saveAs(blob, 'lista-inscripciones.xlsx');
  }


  convertirAExcel(): ArrayBuffer {
    // Crea un array con los encabezados de las columnas de la tabla
    const header = ['Cod. estudiante', 'Nombre completo', 'Materia', 'Fecha inscripción'];

    // Crea un array con los datos de la tabla
    const data = this.dataSource.data.map(element => [
      element.codigoEstudiante,
      element.nombreEstudiante,
      element.nombreMateria,
      element.fechaInscripcion
    ]);

    // Crea un libro de Excel con una hoja que contiene los encabezados y datos de la tabla
    const book = XLSX.utils.book_new();
    const sheet = XLSX.utils.aoa_to_sheet([header, ...data]);
    XLSX.utils.book_append_sheet(book, sheet, 'Lista inscripciones');

    // Convierte el libro de Excel a un archivo binario
    const arrayBuffer = XLSX.write(book, { type: 'array' });

    return arrayBuffer;
  }


}


export interface Element {
  codigoEstudiante:number;
  nombreEstudiante:string;
  nombreMateria:string;
  fechaInscripcion: string;
}

const ELEMENT_DATA: Element[] = [
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
  {codigoEstudiante: 2017220, nombreEstudiante: 'andres bermudez', nombreMateria: 'Porgramacion II', fechaInscripcion: 'febreo/20/2022'},
];

