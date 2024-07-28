import { useRef, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useTodoStore } from "@/store/store";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

type AddTodoFormProps = {
  data: ITodo;
};

const AddTodoForm = ({ data }: AddTodoFormProps) => {
  // input state
  const [inputValue, setInputValue] = useState<string>(data ? data.title : "");
  // zustand todo store
  const { addTodo, editTodo } = useTodoStore();
  // input ref
  const inputRef = useRef<null | HTMLInputElement>(null);

  // handle create new Todo
  const handleCraeteTodo = () => {
    if (inputValue.length > 0) {
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
    } else {
      toast.error("You must write something ...");
      inputRef.current?.focus();
    }
    setInputValue("");
  };


  return (
    <div className="flex mt-4 items-center gap-x-3">
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="text-md"
        placeholder="Write Your Todo..."
        ref={inputRef}
      />
      <Button onClick={handleCraeteTodo}>
        {data ? "Edit Todo" : "Add Todo"}
      </Button>
    </div>
  );
};

export default AddTodoForm;
