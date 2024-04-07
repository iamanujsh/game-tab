import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

interface Props {
  onSetSelectedSort: (selectedSort: string) => void;
}

const sortOrder = [
  { value: "", label: "Relevence" },
  { value: "-added", label: "Date Added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release Date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average Rating" },
];

const SortSelector = ({ onSetSelectedSort }: Props) => {
  const [sortSelector, setSortSelector] = useState("");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{`Order By : ${
          sortSelector.length == 0 ? "Relevence" : sortSelector
        }`}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup
          value={sortSelector}
          onValueChange={setSortSelector}
        >
          {sortOrder.map((item) => (
            <DropdownMenuRadioItem
              onClick={() => onSetSelectedSort(item.value)}
              key={item.label}
              value={item.label}
            >
              {item.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortSelector;
