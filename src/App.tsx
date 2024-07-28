import TodoCart from "./components/TodoCart";
import SelectFilter from "./components/filters/SelectFilter";
import AddTodoForm from "./components/forms/AddTodoForm";
import { TodoFilters } from "./constant";
import Mainlayout from "./layouts/Mainlayout";
import { useTodoStore } from "./store/store";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  // zustand todo store
  const { todos: todoList } = useTodoStore((state) => state);

  // search params
  const searchParams = new URLSearchParams(window.location.search);

  // status Query
  const statusQuery = searchParams.get("status") ?? "";

  let todos = todoList;

  // Filter by status Query
  if (statusQuery) {
    todos = todos.filter((todo) => String(todo.status) === statusQuery);
  }

  return (
    <Mainlayout>
      <AddTodoForm />
      <div className="mt-5">
        <SelectFilter query="status" filterList={TodoFilters} />
      </div>
      <div className="space-y-7 mt-8">
        {todos.length > 0 ? (
          todos.map((todo) => <TodoCart data={todo} key={uuidv4()} />)
        ) : statusQuery ? (
          <h1 className="text-center">
            Nothing matching your search was found :)
          </h1>
        ) : (
          <h1 className="text-center">There is nothing todo :)</h1>
        )}
      </div>
    </Mainlayout>
  );
};

export default App;
