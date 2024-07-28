import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import Mainlayout from "./layouts/Mainlayout";
import { useTodoStore } from "./store/store";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { addTodo } = useTodoStore((state) => state);

  // handle create new Todo
  const handleCraeteTodo = () => {
    addTodo({
      title: inputValue,
      status: false,
      createdAt: new Date(),
      id: uuidv4(),
    });
    setInputValue("");
  };

  // when click on Enter button , run handleCreateTodo
  useEffect(() => {
    const handleClick = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        handleCraeteTodo();
      }
    };
    window.addEventListener("keydown", handleClick);
    return () => {
      window.removeEventListener("keydown", handleClick);
    };
  }, []);

  return (
    <Mainlayout>
      <div className="flex mt-4 items-center gap-x-3">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="text-md"
          placeholder="Write Your Todo..."
        />
        <Button onClick={handleCraeteTodo}>Add Todo</Button>
      </div>
    </Mainlayout>
  );
};

export default App;
