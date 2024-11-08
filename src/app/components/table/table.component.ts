import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../../services/alumnos.service';
import { Alumno } from '../../models/alumno';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {

  titleTable = 'Listado de alumnos';

  alumnos: Alumno[] = [];

  constructor(public data: AlumnosService) {}

  ngOnInit() {
    this.alumnos = this.data.getAlumnos();
  }
  deleteAlumno(alumno: Alumno) {
    this.data.deleteAlumno(alumno);
  }
  editAlumno(alumno: Alumno) {
    this.data.editAlumno(alumno);
  }

}
