import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ConfirmedValidator} from "../register/register.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern("([A-Za-z0-9-_.]+@[A-Za-z0-9-_]+(?:\.[A-Za-z0-9]+)+)")]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    }
  );
  get email() {
    return this.formLogin.get('email')
  }

  // @ts-ignore
  get password() {
    return this.formLogin.get('password')
  }

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.formLogin.value)
  }
}
