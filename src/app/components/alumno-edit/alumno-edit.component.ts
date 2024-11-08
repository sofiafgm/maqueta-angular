import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../../services/alumnos.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-alumno-edit',
  standalone: true,
  imports: [],
  templateUrl: './alumno-edit.component.html',
  styleUrl: './alumno-edit.component.css'
})
export class AlumnoEditComponent implements OnInit {

  alumnoId: number = 0;
  alumno?: any = {};

  constructor(public data: AlumnosService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
  
    this.alumnoId = Number(this.route.snapshot.paramMap.get('id'));
    this.alumno = this.data.getAlumno(this.alumnoId);
    console.log(this.alumno);
  
  }
 
  updateAlumno(editedName: HTMLInputElement, editedLastname: HTMLInputElement, editedAge: number, editedEmail: HTMLInputElement) {
    this.data.updateAlumno({
      id: this.alumnoId,
      nombre: editedName.value, 
      apellido: editedLastname.value, 
      edad: editedAge,
      email: editedEmail.value });
      console.log(this.alumnoId);
      this.router.navigate(['/alumnos']);
      return false;
  }
}
