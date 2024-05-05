'use client';
// pages/chat.tsx
import { useEffect, useState } from 'react';

const ChatPage = () => {
    const [chatData, setChatData] = useState([]);

    useEffect(() => {
        const fetchChatData = async () => {
            try {
                const response = await fetch('/api/chat-files');
                const data = await response.json();
                setChatData(data.chatCard);
            } catch (error) {
                console.error('Failed to fetch chat data:', error);
            }
        };

        fetchChatData();
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div>
            <h1>Chat History</h1>

        </div>
    );
};

export default ChatPage;
