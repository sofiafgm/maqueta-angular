import { Routes } from '@angular/router';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { HomeComponent } from './components/home/home.component';
import { AlumnoEditComponent } from './components/alumno-edit/alumno-edit.component';

export const routes: Routes = [
    { path: '',
        component: HomeComponent
    },
    {
        path: 'alumnos',
        component: AlumnosComponent
    },
    {   path: 'edit/:id',
        component: AlumnoEditComponent
    }
];
