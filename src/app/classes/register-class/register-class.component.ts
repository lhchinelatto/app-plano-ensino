import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-class',
  templateUrl: './register-class.component.html',
  styleUrls: ['./register-class.component.css']
})
export class RegisterClassComponent implements OnInit {
  classForm: FormGroup;
  submitted = false;
  public weekdays: string[] = ['Segunda Feira', 'Terça Feira', 'Quarta Feira', 'Quinta Feira', 'Sexta Feira', 'Sabado'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.classForm = this.formBuilder.group({
      classId: ['', [Validators.required, Validators.maxLength(8)]],
      professor: ['', [Validators.required]],
      weekday: ['', [Validators.required]],
      discipline: ['', [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.classForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.classForm.invalid) {
      alert('name:' + this.classForm.controls.name.invalid +
        '\nprofessor:' + this.classForm.controls.professor.invalid +
        '\nweekday:' + this.classForm.controls.weekday.invalid +
        '\ndiscipline:' + this.classForm.controls.discipline.invalid +
        '\ncompleteForm:' + this.classForm.invalid);
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.classForm.value));
  }

}
