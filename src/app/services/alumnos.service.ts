import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  alumnos: Alumno[];
  constructor(private router: Router) {
    this.alumnos = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez', edad: 20, email: 'juan.perez@example.com'},
    { id: 2, nombre: 'Ana', apellido: 'García', edad: 22, email: 'ana.garcia@example.com' },
    { id: 3, nombre: 'Carlos', apellido: 'Martínez', edad: 19, email: 'carlos.martinez@example.com' },
    { id: 4, nombre: 'Luisa', apellido: 'López', edad: 21, email: 'luisa.lopez@example.com' },
    { id: 5, nombre: 'Pedro', apellido: 'Gómez', edad: 23, email: 'pedro.gomez@example.com' },
    { id: 6, nombre: 'María', apellido: 'Rodríguez', edad: 20, email: 'maria.rodriguez@example.com' }]
  }

  getAlumnos() {
    return this.alumnos;
  }

  addAlumno(alumno: Alumno) {
    this.alumnos.push(alumno);
  }

  editAlumno(alumno: Alumno) {
      this.router.navigate(['/edit/', alumno.id]);
  }

  deleteAlumno(alumno: Alumno) {
    for (let i = 0; i < this.alumnos.length; i++) {
      if (this.alumnos[i].id === alumno.id) {
        this.alumnos.splice(i, 1);
        break;
      }
    }
  }

  updateAlumno(alumno: Alumno) {
    for (let i = 0; i < this.alumnos.length; i++) {
      if (this.alumnos[i].id === alumno.id) {
        this.alumnos[i] = alumno;
        break;
      }
    }
  }

  getAlumno(id: number) {
    for (let i = 0; i < this.alumnos.length; i++) {
      if (this.alumnos[i].id === id) {
        return this.alumnos[i];
      }
    }
    return null;
  }
}