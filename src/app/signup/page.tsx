import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import Card from "@/components/card";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await getServerSession(options);
  console.log(session, "8 signup page");

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/signup");
  }
  return <Card user={session} />;
}
