import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import Profile from "./profile/page";

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <>
      <Profile />
    </>
  );
}
