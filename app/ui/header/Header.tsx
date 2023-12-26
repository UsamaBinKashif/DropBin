import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";

/* eslint-disable @next/next/no-img-element */
interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  return (
    // <!-- component -->
    <header className=" bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20">
      {/* <!-- logo --> */}
      <div className="flex items-center gap-x-2">
        <img src="/assets/bin.png" alt="dropbin-logo" className="w-[50px]" />
        <h1 className="text-[16px] tracking-[2px] text-black font-semibold">
          DropBin.
        </h1>
      </div>
      {/* <!-- end logo --> */}

      {/* <!-- login --> */}
      <div className="flex-initial">
        <div className="flex justify-end items-center relative">
          <div className="block">
            <div className="inline relative">
              <UserButton afterSignOutUrl="/" />
              <SignedOut>
                <SignInButton afterSignInUrl="/dashboard" mode="modal" />
              </SignedOut>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end login --> */}
    </header>
  );
};

export default Header;
