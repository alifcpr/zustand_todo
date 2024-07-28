import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Checkbox } from "./ui/checkbox";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPencil } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { useTodoStore } from "@/store/store";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { useState } from "react";
import AddTodoForm from "./forms/AddTodoForm";

type TodoCartProps = {
  data: ITodo;
};

const TodoCart = ({ data }: TodoCartProps) => {
  // modal state
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // zustand todo store
  const { changeStatus, deleteTodo } = useTodoStore();

  // handle change todo status
  const handleChangeStats = () => {
    changeStatus(data.id);
  };

  const handleDeleteTodo = () => {
    deleteTodo(data.id);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-xs rounded-md md:max-w-lg">
          <DialogHeader>
            <DialogTitle>Edit Todo</DialogTitle>
            <div>
              <AddTodoForm data={data} />
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div
        className={`border relative p-4 rounded-md flex items-center justify-between shadow-sm ${
          data.status ? "border-green-500" : "border-slate-400"
        }`}
      >
        <span className="absolute pointer-events-none px-2 top-0 left-2 bg-white -translate-y-1/2 text-xs">
          {new Date(data.createdAt).toLocaleString()}
        </span>
        <p className={`${data.status && "line-through"} `}>{data.title}</p>
        <div className="flex items-center gap-x-2">
          <Checkbox checked={data.status} onCheckedChange={handleChangeStats} />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <BsThreeDotsVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={() => setIsOpen(true)}
                className="flex items-center justify-center gap-x-3 w-full"
              >
                <FaPencil />
                <span>Edit</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={handleDeleteTodo}
                className="flex items-center justify-center gap-x-3 w-full"
              >
                <FaTrashAlt />
                <span>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};

export default TodoCart;
