import { FormControl } from '@angular/forms';

export interface ITodoForm {
  todo: FormControl<string | null>;
  completed: FormControl<boolean>;
}
