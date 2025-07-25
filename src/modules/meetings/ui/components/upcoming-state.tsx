import Link from "next/link";
import { VideoIcon } from "lucide-react";

import { EmptyState } from "@/components/empty-state";
import { Button } from "@/components/ui/button";

interface UpcomingStateProps {
  meetingId: string;
}

export const UpcomingState = ({ meetingId }: UpcomingStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-8 rounded-lg bg-white px-4 py-5">
      <EmptyState
        image="/upcoming.svg"
        title="Not started yet"
        description="Once you start the meeting, a summary will appear here"
      />

      <div className="flex w-full flex-col-reverse items-center gap-2 lg:flex-row lg:justify-center">
        <Button className="w-full lg:w-auto" asChild>
          <Link href={`/call/${meetingId}`}>
            <VideoIcon />
            Start Meeting
          </Link>
        </Button>
      </div>
    </div>
  );
};
