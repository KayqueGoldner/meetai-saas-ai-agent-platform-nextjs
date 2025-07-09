import { useState } from "react";
import { format } from "date-fns";
import { SearchIcon } from "lucide-react";
import Highlighter from "react-highlight-words";
import { useQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { generateAvatarUri } from "@/lib/avatar";

interface TranscriptProps {
  meetingId: string;
}

export const Transcript = ({ meetingId }: TranscriptProps) => {
  const trpc = useTRPC();
  const { data } = useQuery(
    trpc.meetings.getTranscript.queryOptions({ id: meetingId }),
  );

  const [searchQuery, setSearchQuery] = useState("");
  const filteredData = (data ?? []).filter((item) =>
    item.text.toString().toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex w-full flex-col gap-y-4 rounded-lg border bg-white px-4 py-5">
      <p className="text-sm font-medium">Transcript</p>

      <div className="relative">
        <Input
          placeholder="Search Transcript"
          className="h-9 w-[240px] pl-7"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchIcon className="text-muted-foreground absolute top-1/2 left-2 size-4 -translate-y-1/2" />
      </div>

      <ScrollArea>
        <div className="flex flex-col gap-y-4">
          {filteredData.map((item) => {
            return (
              <div
                key={item.start_ts}
                className="hover:bg-muted flex flex-col gap-y-2 rounded-md border p-4"
              >
                <div className="flex items-center gap-x-2">
                  <Avatar className="size-6">
                    <AvatarImage
                      alt="user avatar"
                      src={
                        item.user.image ??
                        generateAvatarUri({
                          seed: item.user.name,
                          variant: "initials",
                        })
                      }
                    />
                  </Avatar>
                  <p className="text-sm font-medium">{item.user.name}</p>
                  <p className="text-sm font-medium text-blue-500">
                    {format(new Date(0, 0, 0, 0, 0, 0, item.start_ts), "mm:ss")}
                  </p>
                </div>

                <Highlighter
                  className="text-sm text-neutral-700"
                  highlightClassName="bg-yellow-200"
                  searchWords={[searchQuery]}
                  autoEscape={true}
                  textToHighlight={item.text}
                />
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};
