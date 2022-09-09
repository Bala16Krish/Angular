import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmedValidator } from '../vaildator';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  constructor(private fbb: FormBuilder) {
    this.registerForm = fbb.group({
      userName: new FormControl('', [Validators.minLength(4), Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.minLength(6), Validators.required]),
      confirmPwd: new FormControl('', [Validators.required]),
      role: new FormControl('')
    }, {
      validator: ConfirmedValidator('password', 'confirmPwd')
    });

  }

  ngOnInit(): void {
  }
  title = 'Registration Form';
  Role: any = ["Admin", "User"]

  preview: string = '';
  submit() {
    this.preview = JSON.stringify(this.registerForm.value);
  }
  get f() {
    return this.registerForm.controls;
  }

  changeRole(e: any) {
    this.role?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  get role() {
    return this.registerForm.get('role');
  }


  // Login Page

}
