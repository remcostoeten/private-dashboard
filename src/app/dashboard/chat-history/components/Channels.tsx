"use client";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { HashIcon, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Channels() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="space-y-2">
      <Collapsible>
        <CollapsibleTrigger
          onClick={() => setOpen(!open)}
          className="flex justify-between items-center w-full "
        >
          <h3 className="font-medium">channels</h3>
          <ChevronDown
            className="h-4 w-4"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <ul className="mt-4">
            <li className="flex items-center space-x-2 bg-[#2c2c2e] rounded-md p-2">
              <HashIcon className="h-4 w-4 text-yellow-500" />
              <span className="flex-grow">DeliveryApp</span>
              <Badge variant="secondary">1</Badge>
            </li>
            <li className="flex items-center space-x-2 p-2">
              <HashIcon className="h-4 w-4 text-blue-500" />
              <span className="flex-grow">Crypto&NFT</span>
              <Badge variant="secondary">2</Badge>
            </li>
            <li className="flex items-center space-x-2 p-2">
              <HashIcon className="h-4 w-4 text-pink-500" />
              <span className="flex-grow">PMs</span>
            </li>
            <li className="flex items-center space-x-2 p-2">
              <HashIcon className="h-4 w-4 text-green-500" />
              <span className="flex-grow">design_team</span>
            </li>
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
