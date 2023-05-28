import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';

import {FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';

import { SidebarComponentComponent } from '../comun/sideBar/sidebar-component/sidebar-component.component';
import { StudentComponentComponent } from '../students/student-component/student-component.component';
import { SubjectComponentComponent } from '../subjects/subject-component/subject-component.component';
import { InscriptionComponentComponent } from '../inscriptions/inscription-component/inscription-component.component';
import { StudentTableComponent } from '../students/student-table/student-table.component';
import { SubjectTableComponent } from '../subjects/subject-table/subject-table.component';
import { InscriptionTableComponent } from '../Inscriptions/inscription-table/inscription-table.component';
import { InscriptionFormComponentComponent } from '../inscriptions/inscription-form-component/inscription-form-component.component';
import { SubjectFormComponentComponent } from '../subjects/subject-form-component/subject-form-component.component';
import { StudentFormComponentComponent } from '../students/student-form-component/student-form-component.component';
import { SubjectsDeleteFormComponent } from '../subjects/subjects-delete-form/subjects-delete-form.component';
import { StudentDeleteFormComponent } from '../students/student-delete-form/student-delete-form.component';
import { InscriptionDeleteFormComponent } from '../inscriptions/inscription-delete-form/inscription-delete-form.component';
import { StudentViewFormComponent } from '../students/student-view-form/student-view-form.component';
import { StudentEditorFormComponent } from '../students/student-editor-form/student-editor-form.component';
import { InscriptionsEditorFormComponent } from '../inscriptions/inscriptions-editor-form/inscriptions-editor-form.component';
import { SubjectsEditorFormComponent } from '../subjects/subjects-editor-form/subjects-editor-form.component';

@NgModule({
  declarations: [SidebarComponentComponent,StudentComponentComponent,SubjectComponentComponent,
    InscriptionComponentComponent,StudentTableComponent,SubjectTableComponent,InscriptionTableComponent,
    InscriptionFormComponentComponent,SubjectFormComponentComponent,StudentFormComponentComponent,SubjectsDeleteFormComponent,
    StudentDeleteFormComponent,InscriptionDeleteFormComponent,StudentViewFormComponent,StudentEditorFormComponent,InscriptionsEditorFormComponent,SubjectsEditorFormComponent,
  ],
  imports: [
    CommonModule,

    DashboardModuleRoutingModule,

    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
  ]
})
export class DashboardModuleModule { }
