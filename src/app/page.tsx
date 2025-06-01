"use client";

import { useState } from "react";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { data: session, isPending } = authClient.useSession();

  const onSubmit = () => {
    if (!name || !email || !password) return;

    authClient.signUp.email(
      {
        email,
        name,
        password,
      },
      {
        onRequest: (ctx) => {
          //show loading
          setIsSubmitting(true);
        },
        onSuccess: (ctx) => {
          //redirect to the dashboard or sign in page
          setIsSubmitting(false);
        },
        onError: (ctx) => {
          // display the error message
          alert(ctx.error.message);
          setIsSubmitting(false);
        },
      },
    );
  };

  const onLogin = () => {
    if (!name || !email || !password) return;

    authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onRequest: (ctx) => {
          //show loading
          setIsSubmitting(true);
        },
        onSuccess: (ctx) => {
          //redirect to the dashboard or sign in page
          setIsSubmitting(false);
        },
        onError: (ctx) => {
          // display the error message
          alert(ctx.error.message);
          setIsSubmitting(false);
        },
      },
    );
  };

  if (isPending) {
    return (
      <div className="flex flex-col gap-4 p-4">
        <p>Loading...</p>
      </div>
    );
  }

  if (session) {
    return (
      <div className="flex flex-col gap-4 p-4">
        <p>Logged in as {session.user.name}</p>
        <Button onClick={() => authClient.signOut()}>Sign out</Button>
      </div>
    );
  }

  return (
    <div className="flex gap-5 p-4">
      <div className="flex flex-col gap-y-3 border p-4">
        <Input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          onClick={onSubmit}
          disabled={isSubmitting || !name || !email || !password}
        >
          {isSubmitting ? "Creating user..." : "Create user"}
        </Button>
      </div>
      <div className="flex flex-col gap-y-3 border p-4">
        <Input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          onClick={onLogin}
          disabled={isSubmitting || !name || !email || !password}
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </div>
    </div>
  );
}
