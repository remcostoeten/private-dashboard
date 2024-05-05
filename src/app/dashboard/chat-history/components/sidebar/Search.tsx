"use client";
"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Pill from "@/components/ui/pill";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

export default function Aside() {
  const [searchTerm, setSearchTerm] = useState("");

  // ToDo
  // Retrieve dynamic messages
  const directMessages = [
    {
      id: 1,
      name: "John Doe",
      avatar: "avatar1.png",
      time: "10:00 AM",
      message: "No I did not do it yet",
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "avatar2.png",
      time: "11:00 AM",
      message: "This is a message which is quite a bit longer ", // Corrected here
    },
  ];

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("");
  };

  const highlightSearchTerm = (text, searchTerm) => {
    const parts = text.split(new RegExp(`(${searchTerm})`, "gi"));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === searchTerm.toLowerCase() ? (
            <span key={i} style={{ backgroundColor: "yellow" }}>
              {part}
            </span>
          ) : (
            part
          ),
        )}
      </span>
    );
  };

  return (
    <aside className="w-64 flex flex-col  ">
      <div className="relative -translate-x-1">
        <Input
          className="h-12 pl-12 ho"
          type="text"
          placeholder="Search direct messages"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <SearchIcon className="text-white/50 absolute left-4 top-1/2 transform -translate-y-1/2" />
      </div>
      <nav className="">
        <div className="space-y-2 mt-4">
          <h2 className="text-xl">Direct messages</h2>
          <ul>
            {directMessages.map((message) => (
              <li
                className="relative flex items-center space-x-2 pt-2 pl-0"
                key={message.id}
              >
                <Avatar>
                  <AvatarImage src={message.avatar} />
                  <AvatarFallback>{getInitials(message.name)}</AvatarFallback>
                </Avatar>
                <div className="flex-grow flex flex-col">
                  <span>{highlightSearchTerm(message.name, searchTerm)}</span>
                  <p className="text-sm text-gray-400 overflow-ellipsis overflow-hidden max-w-[200px]">
                    {message.message && message.message.length > 25
                      ? message.message.substring(0, 25) + "..."
                      : message.message}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}
