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

type TodoCartProps = {
  data: ITodo;
};

const TodoCart = ({ data }: TodoCartProps) => {
  // zustand todo store
  const { changeStatus } = useTodoStore();

  // handle change todo status
  const handleChangeStats = () => {
    changeStatus(data.id);
  };

  return (
    <div
      className={`border relative p-4 rounded-md flex items-center justify-between shadow-sm ${
        data.status ? "border-green-500" : "border-slate-400"
      }`}
    >
      <span className="absolute px-2 top-0 left-2 bg-white -translate-y-1/2 text-xs">
        {new Date(data.createdAt).toLocaleString()}
      </span>
      <p className={`${data.status && "line-through"}`}>{data.title}</p>
      <div className="flex items-center gap-x-2">
        <Checkbox checked={data.status} onCheckedChange={handleChangeStats} />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <BsThreeDotsVertical />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="flex items-center justify-center gap-x-3 w-full">
              <FaPencil />
              <span>Edit</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center justify-center gap-x-3 w-full">
              <FaTrashAlt />
              <span>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default TodoCart;
