import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type SelectFilterProps = {
  filterList: IFilterList[];
  query: string;
};

const SelectFilter = ({ filterList, query }: SelectFilterProps) => {
  // url
  const searchParams = new URLSearchParams(window.location.search);
  // query
  const queryValue = searchParams.get(query) ?? "all";

  // set query to url
  const setFilterToUrl = (filterValue: string) => {
    if (filterValue === "all") {
      searchParams.delete(query);
      window.location.search = searchParams.toString();
    } else {
      searchParams.set(query, filterValue);
      window.location.search = searchParams.toString();
    }
  };

  return (
    <div>
      <Select
        defaultValue={queryValue}
        onValueChange={(filterValue) => setFilterToUrl(filterValue)}
      >
        <SelectTrigger>
          <SelectValue placeholder="all" />
        </SelectTrigger>
        <SelectContent>
          {filterList.map((filter) => (
            <SelectItem value={filter.value}>{filter.title}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectFilter;
