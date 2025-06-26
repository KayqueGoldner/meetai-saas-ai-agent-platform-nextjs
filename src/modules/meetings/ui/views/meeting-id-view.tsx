"use client";

import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";

import { useTRPC } from "@/trpc/client";
import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/error-state";
import { useConfirm } from "@/hooks/use-confirm";

import { MeetingIdViewHeader } from "../components/meeting-id-view-header";
import { UpdateMeetingDialog } from "../components/update-meeting-dialog";

interface MeetingIdViewProps {
  meetingId: string;
}

export const MeetingIdView = ({ meetingId }: MeetingIdViewProps) => {
  const [updateMeetingDialogOpen, setUpdateMeetingDialogOpen] = useState(false);
  const router = useRouter();
  const queryClient = useQueryClient();
  const trpc = useTRPC();

  const [RemoveConfirmation, confirmRemove] = useConfirm(
    "Are you sure?",
    "The following action will remove this meeting",
  );

  const { data } = useSuspenseQuery(
    trpc.meetings.getOne.queryOptions({ id: meetingId }),
  );

  const removeMeeting = useMutation(
    trpc.meetings.remove.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries(trpc.meetings.getMany.queryOptions({}));
        // TODO: invalidate free tier usage
        router.push("/meetings");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }),
  );

  const handleRemoveMeeting = async () => {
    const ok = await confirmRemove();

    if (!ok) return;

    await removeMeeting.mutateAsync({ id: meetingId });
  };

  return (
    <>
      <RemoveConfirmation />
      <UpdateMeetingDialog
        open={updateMeetingDialogOpen}
        onOpenChange={setUpdateMeetingDialogOpen}
        initialValues={data}
      />

      <div className="flex flex-1 flex-col gap-y-4 p-4 md:px-8">
        <MeetingIdViewHeader
          meetingId={meetingId}
          meetingName={data.name}
          onEdit={() => setUpdateMeetingDialogOpen(true)}
          onRemove={handleRemoveMeeting}
        />
        {JSON.stringify(data, null, 2)}
      </div>
    </>
  );
};

export const MeetingIdViewLoading = () => {
  return (
    <LoadingState
      title="Loading Meeting"
      description="This may take a few seconds"
    />
  );
};

export const MeetingIdViewError = () => {
  return (
    <ErrorState
      title="Error Loading Meeting"
      description="Please try again later"
    />
  );
};
