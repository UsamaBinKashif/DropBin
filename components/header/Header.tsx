/* eslint-disable @next/next/no-img-element */
import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

import Link from "next/link";
import { ModeToggle } from "../common/modetoggler";
import BinSvg from "../dynamic-svgs/bin-svg";
import { Button } from "../ui/button";

const Header: React.FunctionComponent = () => {
  return (
    // <!-- component -->
    <header className=" bg-white dark:bg-black  w-full flex relative justify-between items-center mx-auto px-8 h-20 shadow-lg  ">
      {/* <!-- logo --> */}
      <Link href="/" className="flex items-center gap-x-2">
        <BinSvg className={"w-[50px] fill-black dark:fill-white"} />
        {/* <img src="/assets/bin.png" alt="dropbin-logo" className="w-[50px] " /> */}
        <h1 className="text-[16px]  text-black dark:text-white font-semibold">
          DropBin.
        </h1>
      </Link>
      {/* <!-- end logo --> */}

      {/* <!-- login --> */}
      <div className="flex-initial">
        <div className="flex gap-x-2 items-center relative">
          <ModeToggle />
          <UserButton afterSignOutUrl="/" />

          <SignedOut>
            <Button>
              <SignInButton afterSignInUrl="/dashboard" mode="modal" />
            </Button>
          </SignedOut>
        </div>
      </div>
      {/* <!-- end login --> */}
    </header>
  );
};

export default Header;
