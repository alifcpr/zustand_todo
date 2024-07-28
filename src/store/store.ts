import { create } from "zustand";

type State = {
  todos: ITodo[];
};

type Actoins = {
  addTodo: (todo: ITodo) => void;
  changeStatus: (todoId: string) => void;
  editTodo: (todoId: string, title: string) => void;
  deleteTodo: (todoId: string) => void;
};

export const useTodoStore = create<State & Actoins>((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  changeStatus: (todoId) =>
    set((state) => {
      const todos = [...state.todos];
      const todoIndex = todos.findIndex((todo) => todo.id === todoId);
      todos[todoIndex].status = todos[todoIndex].status ? false : true;
      return { todos };
    }),
  editTodo: (todoId, title) =>
    set((state) => {
      const todos = [...state.todos];
      const todoIndex = todos.findIndex((todo) => todo.id === todoId);
      todos[todoIndex].title = title;
      return { todos };
    }),
  deleteTodo: (todoId) =>
    set((state) => {
      const todos = [...state.todos];
      const newTodos = todos.filter((todo) => todo.id !== todoId);
      return { todos: newTodos };
    }),
}));
