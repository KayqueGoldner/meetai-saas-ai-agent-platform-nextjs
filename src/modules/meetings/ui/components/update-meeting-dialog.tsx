"use client";

import { ResponsiveDialog } from "@/components/responsive-dialog";

import { MeetingForm } from "./meeting-form";
import { MeetingGetOne } from "../../types";

interface UpdateMeetingDialogProps {
  open: boolean;
  onOpenChange(open: boolean): void;
  initialValues: MeetingGetOne;
}

export const UpdateMeetingDialog = ({
  onOpenChange,
  open,
  initialValues,
}: UpdateMeetingDialogProps) => {
  return (
    <ResponsiveDialog
      title="Edit Meeting"
      description="Edit the details of this meeting"
      open={open}
      onOpenChange={onOpenChange}
    >
      <MeetingForm
        onSuccess={(id) => {
          onOpenChange(false);
        }}
        onCancel={() => onOpenChange(false)}
        initialValues={initialValues}
      />
    </ResponsiveDialog>
  );
};
