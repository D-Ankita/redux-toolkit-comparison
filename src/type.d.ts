export interface Todo {
  id: string;
  desc: string;
  isComplete: boolean;
}

export interface State {
  todos: Todo[];
  selectedTodo: string | null;
  counter: number;
}

    // "@types/react": "^18.0.20",
