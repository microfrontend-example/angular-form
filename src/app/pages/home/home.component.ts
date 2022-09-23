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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
})
export class HomeComponent {
  form: FormGroup<ITodoForm>;

  constructor(private _fb: FormBuilder) {
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
    console.log(this.form.value);
    if (this.form.invalid) return;

    const { completed, todo } = this.form.value;

    store.addTodo({
      completed: completed as boolean,
      id: store.id,
      text: todo as string,
    });
    console.log(store);
  }
}
