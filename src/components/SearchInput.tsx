import { Input } from "./ui/input";
import { ChangeEvent, useRef, useState } from "react";

interface Props {
  handleSetSearch: (input: string) => void;
}

const SearchInput = ({ handleSetSearch }: Props) => {
  let inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (inputRef.current) handleSetSearch(inputRef.current.value);
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
