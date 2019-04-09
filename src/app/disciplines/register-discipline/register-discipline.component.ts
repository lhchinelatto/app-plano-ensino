import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-discipline',
  templateUrl: './register-discipline.component.html',
  styleUrls: ['./register-discipline.component.css']
})
export class RegisterDisciplineComponent implements OnInit {
  dscForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dscForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(128)]],
      credits: ['', [Validators.required]]
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

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.dscForm.value));
  }

}
