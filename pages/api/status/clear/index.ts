// pages/api/status/clear/index.ts
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { toast } from "sonner";

const statusDataFilePath = path.resolve(process.cwd(), "statusData.ts");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Simplified approach: Only update the statuses array to an empty array
    const fileContent = `

    export type StatusObject = {
      name: string;
      status: string;
      timestamp: string;
      onlinefor: string | null;
      offlineSince: string | null;
      lastSeen: string | null;
      timesOnline: number;
      firstSeen: Date | null;
      timesOffline: number;
      firstTimestamp :string | null;
      lastSessionDuration: string | null;
    }

    export const statuses: StatusObject[] = [
  {
    "name": "Placeholder",
    "status": "Offline",
    "timestamp": "04:20:69",
    "onlinefor": null,
    "offlineSince": "0 seconds",
    "lastSeen": null,
    "timesOnline": 0,
    "firstSeen": null,
    "firstTimestamp": "00:00:00",
    "lastSessionDuration": "0 seconds",
    "timesOffline": 0
  },
  ]        `;
    fs.writeFileSync(statusDataFilePath, fileContent);

    res.status(200).json({ message: "Status data cleared successfully." });
    toast("Data cleared successfully");
  } catch (error) {
    toast("Failed to clear status data");
    console.error("An error occurred while clearing status data:", error);
    res.status(500).json({ error: "Failed to clear status data." });
  }
};
