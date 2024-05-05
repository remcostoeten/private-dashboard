"use client";
import useChatData from "@/core/hooks/useFetch";
import { useEffect, useState } from "react";

const FAKE_LOADER = true;

const ChatPage = () => {
    const { chatData, isLoading } = useChatData();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">
            <h1 className="text-4xl font-bold mb-8">Chat History</h1>
            <div className="w-full max-w-2xl p-4  shadow-md rounded-lg">
                {chatData.map((chat, index) => (
                    <div
                        key={index}
                        className="flex items-center space-x-4 p-4 border-b border-gray-200"
                    >
                        <img
                            src={chat.img}
                            alt={chat.name}
                            className="w-12 h-12 rounded-full"
                        />
                        <div>
                            <h2 className="text-xl font-semibold">{chat.name}</h2>
                            <p className="text-gray-600">
                                {chat.message ?? "No message available"}
                            </p>
                            <p className="text-sm text-gray-500">{chat.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

interface ChatCard {
    name: string;
    message: string;
    date: string;
    img: string;
}

export default ChatPage;
