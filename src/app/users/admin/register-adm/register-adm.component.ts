import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../../_helpers/must-match.validator';

@Component({
  selector: 'app-register-adm',
  templateUrl: './register-adm.component.html',
  styleUrls: ['./register-adm.component.css']
})
export class RegisterAdmComponent implements OnInit {
  admForm: FormGroup;
  submitted = false;
  hidePass = true;
  hideConf = true;
  public roles: string[] = ['Admin', 'Professor', 'Coordenador'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.admForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(128)]],
      lastName: ['', [Validators.required, Validators.maxLength(128)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(64)]],
      role: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]]
    }, {
        validator: MustMatch('password', 'confirmPassword')
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.admForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.admForm.invalid) {
      alert('firstName:' + this.admForm.controls.firstName.invalid +
      '\nlastName:' + this.admForm.controls.lastName.invalid +
      '\nemail:' + this.admForm.controls.email.invalid +
      '\npassword:' + this.admForm.controls.password.invalid +
      '\nconfirmPassword:' + this.admForm.controls.confirmPassword.invalid +
      '\ncompleteForm:' + this.admForm.invalid);
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.admForm.value))
  }
}
