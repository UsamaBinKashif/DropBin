import GetStarted from "./GetStartedBtn";

const Hero: React.FunctionComponent = () => {
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
          <GetStarted />
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
