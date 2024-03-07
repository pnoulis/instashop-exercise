import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  template: `
    <div class="wrapper">
      <form [formGroup]="loginForm" (submit)="handleSubmit()">
        <label for="username">username</label>
        <input
          autoFocus
          id="username"
          type="text"
          [formControl]="loginForm.controls.username"
        />
        <label for="password">password</label>
        <input
          id="password"
          type="password"
          [formControl]="loginForm.controls.password"
        />
        <button class="button" type="submit">login</button>
        <a class="button" [routerLink]="['/']">continue as guest</a>
      </form>
    </div>
  `,
  styleUrl: './login.component.css',
})
export class LoginComponent {
  authService: AuthService = inject(AuthService);

  router: Router = new Router();

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  handleSubmit() {
    this.authService
      .login(
        this.loginForm.value.username || '',
        this.loginForm.value.password || '',
      )
      .then(() => this.router.navigate(['/']));
  }
}
