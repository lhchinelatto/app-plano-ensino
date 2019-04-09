import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { HeaderComponent } from '../header/header.component';
import { CreatePlanComponent } from '../teaching-plan/create-plan/create-plan.component';
import { ListPlanComponent } from '../teaching-plan/list-plan/list-plan.component';
import { CreateClassPlanComponent } from '../class-plan/create-class-plan/create-class-plan.component';
import { ListClassPlanComponent } from '../class-plan/list-class-plan/list-class-plan.component';
import { RegisterCourseComponent } from '../courses/register-course/register-course.component';
import { ListCoursesComponent } from '../courses/list-courses/list-courses.component';
import { RegisterDisciplineComponent } from '../disciplines/register-discipline/register-discipline.component';
import { ListDisciplinesComponent } from '../disciplines/list-disciplines/list-disciplines.component';
import { RegisterAdmComponent } from '../users/admin/register-adm/register-adm.component';
import { RegisterCoordenatorComponent } from '../users/coordenator/register-coordenator/register-coordenator.component';
import { RegisterProfessorComponent } from '../users/professor/register-professor/register-professor.component';
import { ListUsersComponent } from '../users/list-users/list-users.component';
import { RegisterClassComponent } from '../classes/register-class/register-class.component';
import { ListClassesComponent } from '../classes/list-classes/list-classes.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'register-user', component: RegisterAdmComponent},
  { path: 'register-course', component: RegisterCourseComponent},
  { path: 'register-discipline', component: RegisterDisciplineComponent},
  { path: 'register-class', component: RegisterClassComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
