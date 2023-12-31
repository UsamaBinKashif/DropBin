"use client";

import { SignInButton, useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";

const GetStarted: React.FunctionComponent = () => {
  const { user } = useUser();
  return (
    <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 xl:justify-start ">
      {!user ? (
        <SignInButton
          mode="modal"
          afterSignInUrl="/dashboard"
          redirectUrl="/dashboard"
        >
          <Button>
            Get Started Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </SignInButton>
      ) : (
        <Link href="/dashboard">
          <Button>
            Get Started Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </Link>
      )}
    </div>
  );
};

export default GetStarted;
