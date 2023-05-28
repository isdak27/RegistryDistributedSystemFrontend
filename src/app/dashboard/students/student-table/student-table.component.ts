import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent {

  constructor(private router: Router) { }

  editar() {
    this.router.navigate(['formularioEditarEstudiantes']);
  }

  visualizar() {
    this.router.navigate(['formularioVisualizarEstudiantes']);
  }
  desactivar() {
    this.router.navigate(['formularioDesactivacionEstudiantes']);
  }


  displayedColumns = ['codigo','nombre', 'apellido', 'tipo documento','numero documento', 'estado', 'genero', 'acciones'];
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
    saveAs(blob, 'lista-estudiantes.xlsx');
  }


  convertirAExcel(): ArrayBuffer {
    // Crea un array con los encabezados de las columnas de la tabla
    const header = ['Cod. estudiante', 'Nombre', 'Apellido', 'Tipo de documento', 'Numero de documento', 'estado', 'genero'];

    // Crea un array con los datos de la tabla
    const data = this.dataSource.data.map(element => [
      element.codigo,
      element.nombre,
      element.apellido,
      element.tipo_documento,
      element.numero_documento,
      element.estado,
      element.genero,
    ]);

    // Crea un libro de Excel con una hoja que contiene los encabezados y datos de la tabla
    const book = XLSX.utils.book_new();
    const sheet = XLSX.utils.aoa_to_sheet([header, ...data]);
    XLSX.utils.book_append_sheet(book, sheet, 'Lista estudiantes');

    // Convierte el libro de Excel a un archivo binario
    const arrayBuffer = XLSX.write(book, { type: 'array' });

    return arrayBuffer;
  }


}


export interface Element {
  codigo: number;
  nombre: string;
  apellido: string;
  tipo_documento: string;
  numero_documento: number;
  estado: string;
  genero: string;
}

const ELEMENT_DATA: Element[] = [
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
  {codigo: 1, nombre: 'nombre alumno', apellido: 'apellifo alumno', tipo_documento: 'C.C',numero_documento: 3244234342, estado:'activo', genero:'F'},
];
