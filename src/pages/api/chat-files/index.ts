import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import {
  AVATAR_URL_SUFFIX,
  AVATAR_URL_PREFIX,
  DIRECTORY_PATH,
  PREVIEW_DATA,
} from "@/app/dashboard/chat-history/config";

type Chat = {
  name: string;
  message: string;
  timestamp: string;
};

type ChatCard = {
  img: string;
  name: string;
  message: string;
  date: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const directoryPath = path.join(process.cwd(), DIRECTORY_PATH);

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    const chatCards: ChatCard[] = [];

    const filePromises = files.map((file, index) => {
      return new Promise<void>((resolve, reject) => {
        const filePath = path.join(directoryPath, file);
        fs.readFile(filePath, "utf8", (err, data) => {
          if (err) {
            console.error(`Error reading file ${file}:`, err);
            reject(err);
            return;
          }

          try {
            const chatData: Chat[] = JSON.parse(data);
            if (chatData.length > 0) {
              const lastChat = chatData[chatData.length - 1];
              chatCards.push({
                img: `${AVATAR_URL_PREFIX}${path.basename(
                  file,
                  path.extname(file),
                )}${AVATAR_URL_SUFFIX}`,
                name: lastChat.name,
                message: lastChat.message,
                date: lastChat.timestamp.split(",")[0],
              });
            }
            resolve();
          } catch (parseErr) {
            console.error(`Error parsing JSON from file ${file}:`, parseErr);
            reject(parseErr);
          }
        });
      });
    });

    Promise.all(filePromises)
      .then(() => {
        fs.writeFile(
          "data.json",
          JSON.stringify({ chatCard: chatCards }),
          (err) => {
            if (err) {
              return res.status(500).json({ error: err.message });
            }
            res.status(200).json({ chatCard: chatCards });
          },
        );
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  });
}
