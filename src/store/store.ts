import { create } from "zustand";

type State = {
  todos: ITodo[];
};

type Actoins = {
  addTodo: (todo: ITodo) => void;
};

export const useTodoStore = create<State & Actoins>((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
}));
