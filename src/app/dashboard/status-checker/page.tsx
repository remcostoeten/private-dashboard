"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import OnlineIndicator from "@/components/effects/OnlineIndicator";
import ActivityMonitor from "@/components/status-checker/ActivityMonitor";
import ClearButton from "@/components/status-checker/RemoveStatus";
import StartScraping from "@/components/status-checker/StartScraping";
import { RESULTS_PER_PAGE } from "@/components/status-checker/config";
import { columns } from "@/components/status-checker/table/Columns";
import { StatusTable } from "@/components/status-checker/table/StatusTable";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { TooltipTrigger, Tooltip } from "@/components/ui/tooltip";
import { StatusObject, statuses as statusData } from "@/../statusData";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ListFilter } from "lucide-react";

export default function Dashboard() {
    const [pageNo, setPageNo] = useState(1);
    const itemsPerPage = RESULTS_PER_PAGE;
    const startIndex = (pageNo - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const getLastStatusData = (data: string | any[]) => {
        const lastData = data[data.length - 1];
        return {
            ...lastData,
            firstSeen: lastData.firstSeen?.toString(),
        };
    };

    const lastStatusDataStringified = getLastStatusData(statusData);

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <div className="flex flex-col sm:gap-4 sm:py-4 ">
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    <Tabs defaultValue="all">
                        <div className="flex items-center">
                            <TabsList>
                                <TabsTrigger value="all">Main scraper</TabsTrigger>
                                <TabsTrigger value="secondary">Secondary</TabsTrigger>
                            </TabsList>
                            <div className="ml-auto flex items-center gap-4">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" size="sm" className="h-8 gap-1">
                                            <ListFilter className="h-3.5 w-3.5" />
                                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                                Filter
                                            </span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuCheckboxItem checked>
                                            Active
                                        </DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>
                                            Archived
                                        </DropdownMenuCheckboxItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <StartScraping />
                                <ClearButton />
                            </div>
                        </div>
                        <TabsContent value="all">
                            <Card x-chunk="dashboard-06-chunk-0">
                                <CardHeader>
                                    <CardTitle>
                                        <span className="text-3xl flex gap-2 relative">
                                            Activity monitor{" "}
                                            <Tooltip>
                                                <TooltipTrigger className="font-semi flex gap-2 items-center">
                                                    ({statusData.length})
                                                    <OnlineIndicator
                                                        size={4}
                                                        color={
                                                            statusData[0].status === "Online"
                                                                ? "emerald"
                                                                : "red"
                                                        }
                                                    />
                                                </TooltipTrigger>
                                            </Tooltip>
                                        </span>
                                    </CardTitle>
                                    <CardDescription>
                                        <ActivityMonitor StatusData={lastStatusDataStringified} />
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <StatusTable
                                        data={statusData}
                                        columns={columns}
                                        totalChecks={statusData.length}
                                        pageCount={Math.ceil(statusData.length / itemsPerPage)}
                                        pageNo={pageNo}
                                        searchKey={""}
                                        accessor={(row: StatusObject) => row.name}
                                    />
                                </CardContent>
                                <CardFooter>
                                    <div className="flex items-center gap-4">
                                        showing <strong>{startIndex + 1}</strong> to{" "}
                                        <strong>{endIndex}</strong> of{" "}
                                        <strong>{statusData.length}</strong> products
                                    </div>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                        <TabsContent value="secondary">
                            <>hi</>
                        </TabsContent>
                    </Tabs>
                </main>
            </div>
        </div>
    );
}
