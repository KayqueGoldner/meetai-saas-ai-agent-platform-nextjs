"use client";

import Link from "next/link";
import { RocketIcon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

import {
  MAX_FREE_AGENTS,
  MAX_FREE_MEETINGS,
} from "@/modules/premium/constants";

export const DashboardTrial = () => {
  const trpc = useTRPC();
  const { data } = useQuery(trpc.premium.getFreeUsage.queryOptions());

  if (!data) return null;

  return (
    <div className="border-border/10 flex w-full flex-col gap-y-2 rounded-lg border bg-white/5">
      <div className="flex flex-col gap-y-4 p-3">
        <div className="flex items-center gap-2">
          <RocketIcon className="size-4" />
          <p className="text-sm font-medium">Free Trial</p>
        </div>

        <div className="flex flex-col gap-y-2">
          <p className="text-xs">
            {data.agentCount}/{MAX_FREE_AGENTS} Agents
          </p>
          <Progress value={(data.agentCount / MAX_FREE_AGENTS) * 100} />
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-xs">
            {data.meetingCount}/{MAX_FREE_MEETINGS} Meetings
          </p>
          <Progress value={(data.meetingCount / MAX_FREE_MEETINGS) * 100} />
        </div>
      </div>

      <Button
        className="border-border/10 rounded-t-none border-t bg-transparent hover:bg-white/10"
        asChild
      >
        <Link href="/upgrade">Upgrade</Link>
      </Button>
    </div>
  );
};
