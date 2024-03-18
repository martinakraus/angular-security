import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly http = inject(HttpClient);
  private readonly formBuilder = inject(FormBuilder);
  views = 0;
  form = this.formBuilder.nonNullable.group({
    name: [''],
    password: ['']
  });

  submit() {
    const credentials = this.form.getRawValue();
    this.http.post('http://localhost:3000/login', credentials).pipe(take(1)).subscribe();
  }

  getCurrentView() {
    this.http.get<{ views: number }>('http://localhost:3000/view').pipe(take(1)).subscribe(
      response => this.views = response.views
    );
  }
}
