"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";
import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/error-state";

export const MeetingsView = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.meetings.getMany.queryOptions({}));

  return <div>{JSON.stringify(data)}</div>;
};

export const MeetingsViewLoading = () => {
  return (
    <LoadingState
      title="Loading Meetings"
      description="This may take a few seconds"
    />
  );
};

export const MeetingsViewError = () => {
  return (
    <ErrorState
      title="Error loading meetings"
      description="Please try again later"
    />
  );
};
