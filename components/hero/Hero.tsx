"use client";

import { Button } from "../ui/button";
import { SignInButton } from "@clerk/nextjs";

interface HeroProps {}

const Hero: React.FunctionComponent<HeroProps> = (props) => {


  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-black dark:text-white md:px-8 xl:flex">
        <div className="space-y-5 max-w-2xl mx-auto text-center xl:text-left">
          <h1 className="text-4xl  font-extrabold  mx-auto md:text-5xl">
            Secure your content anywhere, anytime.
          </h1>
          <p className="max-w-xl mx-auto xl:mx-0 ">
            DropBin help you create, manage, and track content more efficiently.
            Plus, proven cloud storage you can trust.
          </p>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 xl:justify-start ">
            <SignInButton mode="modal">
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
          </div>
        </div>
        <div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0">
          <div className="relative">
            <video className="rounded-lg" autoPlay={true} muted loop>
              <source src="/assets/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
