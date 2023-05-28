import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-subject-table',
  templateUrl: './subject-table.component.html',
  styleUrls: ['./subject-table.component.css']
})
export class SubjectTableComponent {

  constructor(private router: Router) { }

  editar() {
    this.router.navigate(['formularioEditarMaterias']);
  }

  desactivar() {
    this.router.navigate(['formularioDesactivacionMaterias']);
  }

  displayedColumns = ['codigo', 'nombre', 'cupos', 'estado', 'acciones'];
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
    saveAs(blob, 'lista-materias.xlsx');
  }


  convertirAExcel(): ArrayBuffer {
    // Crea un array con los encabezados de las columnas de la tabla
    const header = ['Codigo', 'Nombre de la asignatura', 'Cupos', 'Estado'];

    // Crea un array con los datos de la tabla
    const data = this.dataSource.data.map(element => [
      element.codigo,
      element.nombre,
      element.cupos,
      element.estado
    ]);

    // Crea un libro de Excel con una hoja que contiene los encabezados y datos de la tabla
    const book = XLSX.utils.book_new();
    const sheet = XLSX.utils.aoa_to_sheet([header, ...data]);
    XLSX.utils.book_append_sheet(book, sheet, 'Lista materias');

    // Convierte el libro de Excel a un archivo binario
    const arrayBuffer = XLSX.write(book, { type: 'array' });

    return arrayBuffer;
  }

}


export interface Element {
  codigo: number;
  nombre: string;
  cupos: number;
  estado: string;
}

const ELEMENT_DATA: Element[] = [
  {codigo: 1, nombre: 'sistemas distribuidos', cupos: 19, estado: 'disponible'},
  {codigo: 1, nombre: 'sistemas distribuidos', cupos: 19, estado: 'disponible'},
  {codigo: 1, nombre: 'sistemas distribuidos', cupos: 19, estado: 'disponible'},
  {codigo: 1, nombre: 'sistemas distribuidos', cupos: 19, estado: 'disponible'},
  {codigo: 1, nombre: 'sistemas distribuidos', cupos: 19, estado: 'disponible'},
  {codigo: 1, nombre: 'sistemas distribuidos', cupos: 19, estado: 'disponible'},
  {codigo: 1, nombre: 'sistemas distribuidos', cupos: 19, estado: 'disponible'},
  {codigo: 1, nombre: 'sistemas distribuidos', cupos: 19, estado: 'disponible'},
  {codigo: 1, nombre: 'sistemas distribuidos', cupos: 19, estado: 'disponible'},
  {codigo: 1, nombre: 'sistemas distribuidos', cupos: 19, estado: 'disponible'},
  {codigo: 1, nombre: 'sistemas distribuidos', cupos: 19, estado: 'disponible'},
  {codigo: 1, nombre: 'sistemas distribuidos', cupos: 19, estado: 'disponible'},
  {codigo: 1, nombre: 'sistemas distribuidos', cupos: 19, estado: 'disponible'},
  {codigo: 1, nombre: 'sistemas distribuidos', cupos: 19, estado: 'disponible'},
  {codigo: 1, nombre: 'sistemas distribuidos', cupos: 19, estado: 'disponible'},
  {codigo: 1, nombre: 'sistemas distribuidos', cupos: 19, estado: 'disponible'},
  {codigo: 1, nombre: 'sistemas distribuidos', cupos: 19, estado: 'disponible'},
  {codigo: 1, nombre: 'sistemas distribuidos', cupos: 19, estado: 'disponible'},
  {codigo: 1, nombre: 'sistemas distribuidos', cupos: 19, estado: 'disponible'},
  {codigo: 1, nombre: 'sistemas distribuidos', cupos: 19, estado: 'disponible'},
  {codigo: 1, nombre: 'sistemas distribuidos', cupos: 19, estado: 'disponible'},
  {codigo: 1, nombre: 'sistemas distribuidos', cupos: 19, estado: 'disponible'},
  {codigo: 1, nombre: 'sistemas distribuidos', cupos: 19, estado: 'disponible'},
  {codigo: 1, nombre: 'sistemas distribuidos', cupos: 19, estado: 'disponible'},
  {codigo: 1, nombre: 'sistemas distribuidos', cupos: 19, estado: 'disponible'},
  {codigo: 1, nombre: 'sistemas distribuidos', cupos: 19, estado: 'disponible'},
  {codigo: 1, nombre: 'sistemas distribuidos', cupos: 19, estado: 'disponible'},
  {codigo: 1, nombre: 'sistemas distribuidos', cupos: 19, estado: 'disponible'},
  {codigo: 1, nombre: 'sistemas distribuidos', cupos: 19, estado: 'disponible'},

];


