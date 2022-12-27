import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  formRegister = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern("([A-Za-z0-9-_.]+@[A-Za-z0-9-_]+(?:\.[A-Za-z0-9]+)+)")]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confPassword: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern("^[+][8][4][0-9]{9}$")]),
  }, {
      // @ts-ignore
    validator: ConfirmedValidator('password', 'confPassword')
  }
  );

  get email() {
    return this.formRegister.get('email')
  }

  // @ts-ignore
  get password() {
    return this.formRegister.get('password')
  }

  get confPassword() {
    return this.formRegister.get('confPassword')
  }

  get country() {
    return this.formRegister.get('country')
  }

  get age() {
    return this.formRegister.get('age')
  }

  get gender() {
    return this.formRegister.get('gender')
  }

  get phone() {
    return this.formRegister.get('phone')
  }


  constructor() {
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.formRegister.value);
  }
}

export function ConfirmedValidator(controlName: string, matchingControlName: string){
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmedValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}
