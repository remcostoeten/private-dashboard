import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

interface Chat {
    name: string;
    message: string;
    timestamp: string;
}

interface ChatCard {
    img: string;
    name: string;
    message: string;
    date: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const directoryPath = path.join(process.cwd(), '/src/app/dashboard/chat-history/data/');

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        const chatCards: ChatCard[] = [];

        // Map each file to a promise that resolves when the file is read and processed
        const filePromises = files.map((file, index) => {
            return new Promise<void>((resolve, reject) => {
                const filePath = path.join(directoryPath, file);
                fs.readFile(filePath, 'utf8', (err, data) => {
                    if (err) {
                        console.error(`Error reading file ${file}:`, err);
                        reject(err); // Reject the promise if there's an error
                        return;
                    }

                    try {
                        const chatData: Chat[] = JSON.parse(data);
                        chatData.forEach((chat) => {
                            chatCards.push({
                                img: `chat/${path.basename(file, path.extname(file))}.webp`, // Use the filename for the avatar
                                name: chat.name,
                                message: chat.message,
                                date: chat.timestamp.split(',')[0], // Extract date from timestamp
                            });
                        });
                        resolve(); // Resolve the promise when the file is successfully processed
                    } catch (parseErr) {
                        console.error(`Error parsing JSON from file ${file}:`, parseErr);
                        reject(parseErr); // Reject the promise if there's a parsing error
                    }
                });
            });
        });

        // Wait for all file read operations to complete
        Promise.all(filePromises)
            .then(() => {
                // All files have been processed, now write to data.json and send the response
                fs.writeFile('data.json', JSON.stringify({ chatCard: chatCards }), (err) => {
                    if (err) {
                        return res.status(500).json({ error: err.message });
                    }
                    res.status(200).json({ chatCard: chatCards });
                });
            })
            .catch((error) => {
                // Handle any errors that occurred during file read operations
                res.status(500).json({ error: error.message });
            });
    });
}
