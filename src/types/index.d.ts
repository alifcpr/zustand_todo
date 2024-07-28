interface ITodo {
  id: string;
  title: string;
  status: boolean;
  createdAt: Date;
}

interface IFilterList {
  title: string;
  value: string;
}
