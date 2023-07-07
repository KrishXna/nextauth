"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Card from "@/components/card";

export default function page() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/profile");
    },
  });

  return (
    <>
      <Card user={session?.user} />
    </>
  );
}
