import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ApiservicesService } from '../services/apiservices.service';
import { Router } from '@angular/router';
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard";


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private apiservice: ApiservicesService, private router: Router, private auth:AuthService, private authguard: AuthGuard) { }

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    },
      {
        // validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      }
    );
  }

  get registerFormControl() {
    return this.signinForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.signinForm.valid) {
      this.auth.signin(this.signinForm.value.email, this.signinForm.value.password);
    }
  }


}
