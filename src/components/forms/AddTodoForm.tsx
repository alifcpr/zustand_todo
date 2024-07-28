import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useTodoStore } from "@/store/store";
import { v4 as uuidv4 } from "uuid";

type AddTodoFormProps = {
  data: ITodo;
};

const AddTodoForm = ({ data }: AddTodoFormProps) => {
  const [inputValue, setInputValue] = useState<string>(data ? data.title : "");
  const { addTodo, editTodo } = useTodoStore();

  // handle create new Todo
  const handleCraeteTodo = () => {
    if (data) {
      editTodo(data.id, inputValue);
    } else {
      addTodo({
        title: inputValue,
        status: false,
        createdAt: new Date(),
        id: uuidv4(),
      });
    }
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
    <div className="flex mt-4 items-center gap-x-3">
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="text-md"
        placeholder="Write Your Todo..."
      />
      <Button onClick={handleCraeteTodo}>
        {data ? "Edit Todo" : "Add Todo"}
      </Button>
    </div>
  );
};

export default AddTodoForm;
