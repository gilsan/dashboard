import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private router: Router,
     private fb: FormBuilder,
     private auth: AuthService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', { Validators: [  Validators.required, Validators.email]}],
      password: ['']
  });
}

  login() {
    this.auth.loginUser(this.form.value.email, this.form.value.password);
   // this.router.navigate(['starter']);
  }

  signup() {
    this.router.navigate(['signin']);
  }
}
