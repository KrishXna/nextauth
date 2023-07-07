import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="w-full h-20 px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl">
            <Link href="/">NextAuth</Link>
          </div>
          <div className="text-xl">
            <ul className="flex gap-x-8">
              <Link href="/signup">
                <li>Signup</li>
              </Link>
              <Link href="/profile">
                <li>Profile</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
