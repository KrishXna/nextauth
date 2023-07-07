"use client";
import React from "react";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

type User = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: any;
};

type Props = {
  user: User;
};

const card = ({ user }: Props) => {
  const session = useSession();
  return (
    <>
      {session ? (
        <>
          <div className="max-w-5xl mx-auto border shadow-sm px-12 py-4">
            <div className="flex justify-between">
              <div>
                <div className="text-2xl mb-4">
                  Username: &nbsp;{user?.name}
                </div>
                <div className="text-2xl">
                  Email: &nbsp;
                  {user?.email}
                </div>
                <div>
                  {/* <Image
                    src={user?.image}
                    alt="Profile"
                    width={300}
                    height={300}
                    priority={true}
                  /> */}
                </div>
              </div>
              <div className="bg-white text-black px-4 h-10 flex items-center ">
                <button onClick={() => signOut()}>Sign out</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1>Your are not Loggedin !</h1>
      )}
    </>
  );
};

export default card;
