import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  constructor( private auth: AuthService ,
        private fb: FormBuilder) { }

  ngOnInit() {
    this.form =  this.fb.group({
      email: ['', { Validators: [ Validators.required, Validators.email  ]}],
      password: ['']
    });
  }

  register() {

      this.auth.registerUser(this.form.value.email, this.form.value.password);
   }

}
