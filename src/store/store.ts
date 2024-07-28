import { create } from "zustand";

type State = {
  todos: ITodo[];
};

type Actoins = {
  addTodo: (todo: ITodo) => void;
  changeStatus: (todoId: string) => void;
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
}));
