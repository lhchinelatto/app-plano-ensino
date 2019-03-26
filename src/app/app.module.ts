import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule
} from "@angular/material";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { CreatePlanComponent } from "./teaching-plan/create-plan/create-plan.component";
import { ListPlanComponent } from "./teaching-plan/list-plan/list-plan.component";
import { CreateClassPlanComponent } from "./class-plan/create-class-plan/create-class-plan.component";
import { ListClassPlanComponent } from "./class-plan/list-class-plan/list-class-plan.component";

@NgModule({
  declarations: [
    AppComponent,
    CreatePlanComponent,
    HeaderComponent,
    ListPlanComponent,
    CreateClassPlanComponent,
    ListClassPlanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
