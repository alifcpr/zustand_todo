import TodoCart from "./components/TodoCart";
import AddTodoForm from "./components/forms/AddTodoForm";
import Mainlayout from "./layouts/Mainlayout";
import { useTodoStore } from "./store/store";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const { todos } = useTodoStore((state) => state);

  return (
    <Mainlayout>
      <AddTodoForm />
      <div className="space-y-7 mt-8">
        {todos.map((todo) => (
          <TodoCart data={todo} key={uuidv4()} />
        ))}
      </div>
    </Mainlayout>
  );
};

export default App;
