import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { navigateToUrl } from 'single-spa';

import store from '@throwjs/store';
import { ITodoForm } from './models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
})
export class HomeComponent {
  form: FormGroup<ITodoForm>;
  show: boolean;

  constructor(private _fb: FormBuilder) {
    this.show = false;
    this.form = this._fb.group<ITodoForm>({
      todo: new FormControl(null, Validators.required),
      completed: new FormControl(false, {
        nonNullable: true,
        validators: Validators.required,
      }),
    });
  }

  go() {
    navigateToUrl('/');
  }

  sendForm(): void {
    if (this.form.invalid) return;

    const { completed, todo } = this.form.value;

    store.addTodo({
      completed: completed as boolean,
      id: store.id,
      text: todo as string,
    });

    this.form.reset();
    this.show = true;

    setTimeout(() => {
      this.show = false;
    }, 1500);
  }
}
