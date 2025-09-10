// Example: components/AuthButton.js
"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { UserIcon } from "@heroicons/react/24/outline";
import {PowerIcon} from "@heroicons/react/24/solid";
import Image from "next/image";
export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex justify-between space-x-8 absolute right-8">

        
        {session.user.image && (
            <Image src={session.user.image} 
            alt="User Avatar" 
            title={session.user.name}
            width={32} 
            height={32} 
            className="rounded-full"/>
        )}
        
        <button
          onClick={() => signOut()}
          className=""
          title="Sign out"
        >
          <PowerIcon className="w-6 h-6" />
        </button>
      </div>
    );
  }
  return (
    <button
      onClick={() => signIn("google")}
      className=""
      title={`Sign in With Google`}
    >
      <UserIcon className="h-6 w-6 absolute right-16" />
    </button>
  );
}
