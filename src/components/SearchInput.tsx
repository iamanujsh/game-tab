import { Input } from "./ui/input";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  handleSetSearch: (input: string) => void;
}

const SearchInput = ({ handleSetSearch }: Props) => {
  let inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (inputRef.current) handleSetSearch(inputRef.current.value);
        navigate("/");
      }}
      className="flex items-center gap-4 w-full "
    >
      <Input
        ref={inputRef}
        className="bg-gray-800 rounded-2xl text-white"
        placeholder={"Search Games"}
      />
    </form>
  );
};

export default SearchInput;
