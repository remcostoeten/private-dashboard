'use client'
import { useEffect, useState } from "react";

interface ChatCard {
    name: string;
    message: string;
    date: string;
    img: string;
}

const useChatData = () => {
    const [chatData, setChatData] = useState<ChatCard[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchChatData = async () => {
            try {
                const response = await fetch("/api/chat-files");
                const data = await response.json();
                setChatData(data.chatCard);
            } catch (error) {
                console.error("Failed to fetch chat data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchChatData();
    }, []); // Empty dependency array means this effect runs once on mount

    return { chatData, isLoading };
};

export default useChatData;