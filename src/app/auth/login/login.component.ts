import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      nonNullable: true,
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
      ]]
    });
  }

  get f(){
    return this.loginForm.controls;
  }

  ngOnInit(){
    
  }

  onSubmit(){
    if(!this.loginForm.valid) { 
      this.loginForm.markAllAsTouched();
      return;
    }
    
    console.log(this.loginForm.value);
    this.router.navigate(['/']);
  }
}
