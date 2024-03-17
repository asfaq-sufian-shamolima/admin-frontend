import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/user';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObject: User = {
    email: '',
    password: ''
  };
  isError: boolean = false;

  constructor(private router: Router){}

  onLogin() {
    if(this.loginObject.email === 'a@b.c'
        && this.loginObject.password === 'a') {
      this.isError = false;

      this.router.navigateByUrl('/main');

    } else {
      this.isError = true;
    }
  }
}
