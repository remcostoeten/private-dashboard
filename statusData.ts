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
    name: "John Doe",
    status: "online",
    timestamp: "2022-01-01T00:00:00Z",
    onlinefor: "300 seconds",
    offlineSince: null,
    lastSeen: "2022-01-01T00:05:00Z",
    timesOnline: 1,
    firstSeen: new Date("2022-01-01T00:00:00Z"),
    timesOffline: 0,
    firstTimestamp: "2022-01-01T00:00:00Z",
    lastSessionDuration: null
  }
];
