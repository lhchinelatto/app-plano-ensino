// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { RoutingModule } from './routing/routing.module';
import { HttpClientModule } from '@angular/common/http';
//import { AngularMaterialModule } from './angular-material.module';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreatePlanComponent } from './teaching-plan/create-plan/create-plan.component';
import { ListPlanComponent } from './teaching-plan/list-plan/list-plan.component';
import { CreateClassPlanComponent } from './class-plan/create-class-plan/create-class-plan.component';
import { ListClassPlanComponent } from './class-plan/list-class-plan/list-class-plan.component';
import { RegisterCourseComponent } from './courses/register-course/register-course.component';
import { ListCoursesComponent } from './courses/list-courses/list-courses.component';
import { RegisterDisciplineComponent } from './disciplines/register-discipline/register-discipline.component';
import { ListDisciplinesComponent } from './disciplines/list-disciplines/list-disciplines.component';
import { RegisterAdmComponent } from './users/admin/register-adm/register-adm.component';
import { RegisterCoordenatorComponent } from './users/coordenator/register-coordenator/register-coordenator.component';
import { RegisterProfessorComponent } from './users/professor/register-professor/register-professor.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { RegisterClassComponent } from './classes/register-class/register-class.component';
import { ListClassesComponent } from './classes/list-classes/list-classes.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePlanComponent,
    HeaderComponent,
    ListPlanComponent,
    CreateClassPlanComponent,
    ListClassPlanComponent,
    RegisterCourseComponent,
    ListCoursesComponent,
    RegisterDisciplineComponent,
    ListDisciplinesComponent,
    RegisterAdmComponent,
    RegisterCoordenatorComponent,
    RegisterProfessorComponent,
    ListUsersComponent,
    RegisterClassComponent,
    ListClassesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RoutingModule,
    //AngularMaterialModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
