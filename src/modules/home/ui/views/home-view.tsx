"use client";

import { useQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";

export const HomeView = () => {
  const trpc = useTRPC();
  const { data } = useQuery(trpc.hello.queryOptions({ text: "Kayque" }));

  return <div className="flex flex-col gap-4 p-4">{data?.greeting}</div>;
};
