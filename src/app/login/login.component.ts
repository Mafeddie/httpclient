import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  access = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI4MDY5MzM1LCJqdGkiOiI2ZjBmYTZhZDkzMGQ0MzNhOWY0NTQ1NDE0NDYwZTliZSIsInVzZXJfaWQiOjwLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSJ9.OpxNlPw4seI9rM7hNEei0nlQCCbSq7a85auCE-SrVHk"

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password : new FormControl('')
  });

  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    
  }
  constructor() { }

  ngOnInit(): void {
    
  }

}
