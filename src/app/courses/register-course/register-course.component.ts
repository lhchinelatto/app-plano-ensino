import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-course',
  templateUrl: './register-course.component.html',
  styleUrls: ['./register-course.component.css']
})
export class RegisterCourseComponent implements OnInit {
  courseForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.courseForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(128)]],
      coordinator: ['', [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.courseForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.courseForm.invalid) {
      alert('name:' + this.courseForm.controls.name.invalid +
        '\ncoordinator:' + this.courseForm.controls.coordinator.invalid +
        '\ncompleteForm:' + this.courseForm.invalid);
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.courseForm.value));
  }

}
