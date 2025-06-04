"use client";

import { useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

export const HomeView = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="flex flex-col gap-4 p-4">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      {session && <p>Logged in as {session.user.name}</p>}
      <Button
        onClick={() =>
          authClient.signOut({
            fetchOptions: { onSuccess: () => router.push("/sign-in") },
          })
        }
      >
        Sign out
      </Button>
    </div>
  );
};
