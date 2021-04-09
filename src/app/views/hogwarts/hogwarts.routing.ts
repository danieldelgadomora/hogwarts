
import { Estudiantes } from './estudiantes/estudiantes.component';
import { Personajes } from './personajes/personajes.component';
import { Routes } from '@angular/router';
import { Docentes } from './docentes/docentes.component';



export const ViewsRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'HOGWARTS'
    },
    children: [

      {
        path: 'personajes',
        component: Personajes,
        data: {
          title: 'Personajes'
        }
      },

      {
        path: 'estudiantes',
        component: Estudiantes,
        data: {
          title: 'Estudiantes'
        }
      },

      {
        path: 'docentes',
        component: Docentes,
        data: {
          title: 'Docentes'
        }
      },

    ]
  }
];
