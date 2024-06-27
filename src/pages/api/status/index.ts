import puppeteer from 'puppeteer';
import { Request, Response } from 'express';
import { getCurrentDateTime } from '@/core/helpers/getCurrentDateTime'; // Assuming this is defined elsewhere
import fs from 'fs';

const CHROME_PROFILE_PATH = './data'; // Adjust the path as needed

interface StatusObject {
    name: string;
    status: string;
    timestamp: string;
    onlinefor: string | null;
    offlineSince: string | null;
    lastSeen: Date | string | null;
    timesOnline: number;
    timesOffline: number;
    firstSeen: Date | string | null;
    firstTimestamp: number | string | null;
    lastSessionDuration: string | null;
}

let statusData: StatusObject[] = [];
let previousStatus: string | null = null;
let timesOnline: number = 0;
let firstSeen: Date | string | null = null;
let lastSeen: Date | string | null = null;
let totalOnlineDuration = 0;
let lastOnlineTimestamp = new Date();
let timesOffline: number = 0;
let totalOfflineDuration = 0;
let lastOfflineTimestamp = new Date();

async function writeStatusesToFile(statuses: StatusObject[]) {
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
      firstTimestamp: string | null;
      lastSessionDuration: string | null;
    }

    export const statuses: StatusObject[] = ${JSON.stringify(
        statuses,
        null,
        2,
    )};
  `;
    await fs.promises.writeFile('statusData.ts', fileContent);
}

export default async (req: Request, res: Response): Promise<void> => {
    try {
        const name = "Ysbrand Roderick Octavius de Vries ";
        if (!name) throw new Error('Name is required.');

        console.log('Launching Puppeteer...');
        let browser;
        try {
            browser = await puppeteer.launch({
                headless: false, // Set to true for production
                args: [`--user-data-dir=${CHROME_PROFILE_PATH}`],
            });
            const page = await browser.newPage();
            console.log('Navigating to WhatsApp...');
            await page.goto('https://web.whatsapp.com/');

            console.log('Scrolling to find the name...');
            await scrollToFindName(page, name);

            console.log('Waiting for and clicking on the name...');
            await waitForAndClickOnName(page, name);

            console.log('Checking the status...');
            let currentStatus = 'offline';
            try {
                await page.waitForSelector('span[title="online"]', { timeout: 5000 });
                currentStatus = 'online';
            } catch (error) {
                console.error('Error checking status:', error);
            }

            console.log(`Status for ${name}: ${currentStatus}`);

            // Additional logic to update the status data...

        } catch (error) {
            console.error('An error occurred during execution:', error);
            res.status(500).json({ error: error.message });
        } finally {
            if (browser) {
                console.log('Closing the browser...');
                await browser.close();
            }
        }
    } catch (error) {
        console.error('An error occurred:', error);
        res.status(500).json({ error: error.message });
    }
};

// Helper function to scroll down until the name is found
async function scrollToFindName(page, name) {
    await page.waitForTimeout(2000); // Initial wait
    let found = false;
    while (!found) {
        await page.evaluate(() => window.scrollBy(0, window.innerHeight));
        await page.waitForTimeout(500); // Wait before scrolling again
        const names = await page.$$eval('div._3FRCZ', divs => divs.map(div => div.textContent));
        if (names.includes(name)) {
            found = true;
        }
    }
}

// Helper function to wait for the name selector and click on it
async function waitForAndClickOnName(page, name) {
    await page.waitForSelector(`span:text("${name}")`);
    await page.click(`span:text("${name}")`);
}