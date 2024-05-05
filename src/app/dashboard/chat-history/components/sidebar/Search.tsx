'use client';
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { SearchIcon, XIcon } from "lucide-react";
import ToggleSearchMode from "./toggleSearchMode";
import useChatData from "@/core/hooks/useFetch";

interface Message {
    id: number;
    name: string;
    image: string;
    timestamp: string;
    message: string;
}

const Aside = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [searchMode, setSearchMode] = useState<string>("highlight");

    const { chatData = [], isLoading } = useChatData();

    const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchModeChange = (newMode: string) => {
        setSearchMode(newMode);
    };

    return (
        <aside className="w-64 flex flex-col">
            <div className="flex items-center justify-between p-4">
                <h2 className="text-xl font-semibold">Chat</h2>
                <ToggleSearchMode onClick={handleSearchModeChange} />
            </div>
            <div className="relative">
                <Input
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                    className="pr-8"
                />
                {searchTerm ? (
                    <XIcon
                        onClick={() => setSearchTerm("")}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    />
                ) : (
                    <SearchIcon
                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    />
                )}
            </div>
            <nav className="">
                <div className="space-y-2 mt-4">
                    <h2 className="text-xl">Direct messages</h2>
                    <ul>
                        {isLoading ? (
                            <div>Loading...</div>
                        ) : (
                            chatData
                                .filter(
                                    (message) =>
                                        searchMode === "highlight" ||
                                        message.name.toLowerCase().includes(searchTerm.toLowerCase())
                                )
                                .map((message) => (
                                    <li
                                        className="relative flex items-center space-x-2 pt-2 pl-0"
                                        key={message.id}
                                    >
                                        <Avatar>
                                            <AvatarImage src={message.image} alt={message.name} />
                                            <AvatarFallback>{message.name[0]}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col">
                                            <span className="font-medium">{message.name}</span>
                                            <span className="text-sm text-gray-500">{message.timestamp}</span>
                                        </div>
                                    </li>
                                ))
                        )}
                    </ul>
                </div>
            </nav>
        </aside>
    );
};

export default Aside;