import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

import { Discipline } from '../discipline.model';
import { DisciplineService } from '../discipline.service';

@Component({
  selector: 'app-register-discipline',
  templateUrl: './register-discipline.component.html',
  styleUrls: ['./register-discipline.component.css']
})
export class RegisterDisciplineComponent implements OnInit {
  dscForm: FormGroup;
  submitted = false;
  private mode = 'create';
  private disciplineId: string;
  enteredName = '';
  enteredCredits = '';
  discipline: Discipline;
  isLoading = false;
  private authStatusSub: Subscription;

  constructor(public disciplineService: DisciplineService, private formBuilder: FormBuilder, public route: ActivatedRoute) { }

  ngOnInit() {
    this.dscForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(128)]],
      credits: ['', [Validators.required]]
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('disciplineId')) {
        this.mode = 'edit';
        this.disciplineId = paramMap.get('disciplineId');
        this.isLoading = true;
        this.disciplineService.getDiscipline(this.disciplineId).subscribe(disciplineData => {
          this.isLoading = false;
          this.discipline = {
            //id: disciplineData._id,
            name: disciplineData.name,
            credits: disciplineData.credits,
            courses: disciplineData.courses,
            classes: disciplineData.classes
          };
          this.dscForm.setValue({
            name: this.discipline.name,
            credits: this.discipline.credits
          });
        });
      } else {
        this.mode = 'create';
        this.disciplineId = null;
      }
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.dscForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.dscForm.invalid) {
      alert('name:' + this.dscForm.controls.name.invalid +
        '\credits:' + this.dscForm.controls.credits.invalid +
        '\ncompleteForm:' + this.dscForm.invalid);
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.disciplineService.addDiscipline(
        this.dscForm.value.name,
        this.dscForm.value.credits,
        null, null
      );
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.dscForm.value));
    }
    this.dscForm.reset();
  }
}
