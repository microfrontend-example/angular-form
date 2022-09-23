declare module '@throwjs/store' {
  import { Observable } from 'rxjs';
  export interface ITodo {
    id: number;
    text: string;
    completed: boolean;
  }
  class StoreTodo {
    private _storeTodo$;
    private _id;
    constructor();
    get storeTodo$(): Observable<ITodo[]>;
    get id(): number;
    addTodo(todo: ITodo): void;
  }
  const storeTodo: StoreTodo;
  export default storeTodo;
}
