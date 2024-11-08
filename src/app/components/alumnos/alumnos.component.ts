import { Component} from '@angular/core';
import { AlumnosService } from '../../services/alumnos.service';
import { TableComponent } from "../table/table.component";

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent {
 
  constructor(public data: AlumnosService) {
  }
  addAlumno(newName: HTMLInputElement, newLastname: HTMLInputElement, newAge: number, newEmail: HTMLInputElement) {
    this.data.addAlumno({
      id: this.data.alumnos.length + 1,
      nombre: newName.value, 
      apellido: newLastname.value, 
      edad: newAge, 
      email: newEmail.value });
    newName.value = '';
    newLastname.value = '';
    newEmail.value = '';
    return false;
  }
}
