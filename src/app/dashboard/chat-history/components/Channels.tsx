import { Badge } from "@/components/ui/badge";
import { HashIcon } from "lucide-react";

export default function Channels() {
  return (
    <div className="space-y-2">
      <h3 className="font-medium">channels</h3>
      <ul>
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
    </div>
  );
}
