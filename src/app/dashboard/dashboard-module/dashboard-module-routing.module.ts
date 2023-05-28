import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InscriptionComponentComponent } from '../inscriptions/inscription-component/inscription-component.component';
import { StudentComponentComponent } from '../students/student-component/student-component.component';
import { SubjectComponentComponent } from '../subjects/subject-component/subject-component.component';
import { SidebarComponentComponent } from '../comun/sideBar/sidebar-component/sidebar-component.component';
import { StudentTableComponent } from '../students/student-table/student-table.component';
import { InscriptionTableComponent } from '../Inscriptions/inscription-table/inscription-table.component';
import { SubjectTableComponent } from '../subjects/subject-table/subject-table.component';
import { SubjectFormComponentComponent } from '../subjects/subject-form-component/subject-form-component.component';
import { StudentFormComponentComponent } from '../students/student-form-component/student-form-component.component';
import { InscriptionFormComponentComponent } from '../inscriptions/inscription-form-component/inscription-form-component.component';
import { StudentDeleteFormComponent } from '../students/student-delete-form/student-delete-form.component';
import { SubjectsDeleteFormComponent } from '../subjects/subjects-delete-form/subjects-delete-form.component';
import { InscriptionDeleteFormComponent } from '../inscriptions/inscription-delete-form/inscription-delete-form.component';
import { StudentEditorFormComponent } from '../students/student-editor-form/student-editor-form.component';
import { StudentViewFormComponent } from '../students/student-view-form/student-view-form.component';
import { InscriptionsEditorFormComponent } from '../inscriptions/inscriptions-editor-form/inscriptions-editor-form.component';
import { SubjectsEditorFormComponent } from '../subjects/subjects-editor-form/subjects-editor-form.component';

const routes: Routes = [
  {
    path: '',
    component: SidebarComponentComponent,
    children: [
      {
        path: 'estudiantes',
        component: StudentComponentComponent
      },
      {
        path: 'materias',
        component: SubjectComponentComponent
      },
      {
        path: 'inscripciones',
        component: InscriptionComponentComponent
      }
      ,
      {
        path: 'tablaEstudiantes',
        component: StudentTableComponent
      },
      {
        path: 'tablaInscripciones',
        component: InscriptionTableComponent
      },
      {
        path: 'tablaMaterias',
        component: SubjectTableComponent
      },
      {
        path: 'formularioMaterias',
        component: SubjectFormComponentComponent
      },
      {
        path: 'formularioInscripciones',
        component: InscriptionFormComponentComponent
      },
      {
        path: 'formularioEstudiantes',
        component: StudentFormComponentComponent
      },
      {
        path: 'formularioDesactivacionMaterias',
        component: SubjectsDeleteFormComponent
      },
      {
        path: 'formularioDesactivacionInscripciones',
        component: InscriptionDeleteFormComponent
      },
      {
        path: 'formularioDesactivacionEstudiantes',
        component: StudentDeleteFormComponent
      },
      {
        path: 'formularioEditarEstudiantes',
        component: StudentEditorFormComponent
      },
      {
        path: 'formularioVisualizarEstudiantes',
        component: StudentViewFormComponent
      },
      {
        path: 'formularioEditarMaterias',
        component: SubjectsEditorFormComponent
      },
      {
        path: 'formularioEditarInscripciones',
        component: InscriptionsEditorFormComponent
      },


    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardModuleRoutingModule { }
