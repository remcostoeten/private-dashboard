// ToDo add link to unique chat page

"use client";
import { useState, useEffect, Key } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { SearchIcon, XIcon } from "lucide-react";
import ToggleSearchMode from "./toggleSearchMode";
import { toast } from "sonner";

type ChatCard = {
    timestamp: string;
    name: string;
    message: string;
    image: string;
}

const FAKE_LOADER = false;

const Aside = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [searchMode, setSearchMode] = useState<string>("highlight");
    const [chatData, setChatData] = useState<ChatCard[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const highlightSearchTerm = (text: string, searchTerm: string) => {
        if (!searchTerm) return text;
        const regex = new RegExp(searchTerm, "gi");
        return text.replace(
            regex,
            `<span class="bg-cyan-200/50 p-1 rounded-md">${searchTerm}</span>`,
        );
    };

    useEffect(() => {
        const fetchChatData = async () => {
            try {
                const response = await fetch("/api/chat-files");
                const data: ChatCard[] = await response.json();
                console.log(data);
                setChatData(data);
            } catch (error) {
                console.error("Failed to fetch chat data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        if (FAKE_LOADER) {
            setTimeout(() => {
                fetchChatData();
            }, 5000);
        } else {
            fetchChatData();
        }
    }, []);

    const handleSearchTermChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchModeChange = (newMode: { mode: string }) => {
        setSearchMode(newMode.mode);
        toast(`Search mode changed to ${newMode.mode}`);
    };

    async function loadAvatar(imageUrl: string) {
        try {
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            return URL.createObjectURL(blob);

        } catch (error) {
            avatarimage
            console.error('Failed to load avatar:', error);
            return '';
        }
    }

    return (
        <aside className="w-64 flex flex-col gap-2">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Chat</h2>
            </div>
            <div className="relative flex gap-2">
                <Input
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                    className="pr-8"
                />
                {searchTerm ? (
                    <XIcon
                        onClick={() => setSearchTerm("")}
                        className="absolute right-14 top-1/2 transform -translate-y-1/2"
                    />
                ) : (
                    <SearchIcon className="absolute right-14 top-1/2 transform -translate-y-1/2" />
                )}
                <ToggleSearchMode onClick={handleSearchModeChange} />
            </div>
            <nav>
                <div className="space-y-2 mt-4">avatarimage
                    <ul>
                        {Array.isArray(chatData.chatCard) &&
                            chatData.chatCard
                                .filter(
                                    (message) =>
                                        searchMode === "highlight" ||
                                        message.nameavatarimageull | undefined) => (
                        <li
                            className="relative border-b pb-4 flex items-center space-x-2 pt-2 pl-0"
                            key={index}
                        >
                            <Avatar>
                                {/* ToDo make soution for imagei */}
                                <AvatarImage src={loadAvatar} alt={message.name} />
                                <AvatarFallback>{message.name[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-grow flex  justify-between">
                                <div>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: highlightSearchTerm(
                                                message.name,
                                                searchTerm,
                                            ),
                                        }}
                                    ></span>{" "}
                                    <p className="text-balance text-sm text-gray-400 overflow-ellipsis overflow-hidden max-w-[200px]">
                                        {message.message && message.message.length > 25
                                            ? message.message.substring(0, 25) + "..."
                                            : message.message}
                                    </p>
                                </div>
                                <time className="text-xs text-gray-400">
                                    {message.date}
                                </time>
                            </div>
                        </li>
                                ))}
                    </ul>
                </div>
            </nav>
        </aside>
    );
};

export default Aside;
