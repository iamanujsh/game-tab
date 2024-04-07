import { Button } from "@/components/ui/button";
import { ScrollArea } from "./ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import usePlatform from "@/hooks/usePlatform";
import { useState } from "react";
import { Platform } from "@/hooks/useGames";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ onSelectedPlatform }: Props) => {
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const { platforms } = usePlatform();

  // console.log(selectedPlatform);

  return (
    <div className="p-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            {selectedPlatform === "" ? "Platforms" : selectedPlatform}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <ScrollArea className="h-72">
            <DropdownMenuRadioGroup
              value={selectedPlatform}
              onValueChange={setSelectedPlatform}
            >
              {platforms.map((platform) => (
                <DropdownMenuRadioItem
                  onClick={() => onSelectedPlatform(platform)}
                  key={platform.id}
                  value={platform.name}
                >
                  {platform.name}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default PlatformSelector;
