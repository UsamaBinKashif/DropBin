/* eslint-disable @next/next/no-img-element */
import { features } from "@/lib/constants";

const Features: React.FunctionComponent = () => {
  return (
    <section className="">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-semibold title-font text-black dark:text-white mb-4">
            What can you do with DropBin?
          </h1>

          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-black dark:bg-white inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 items-center justify-center">
          {features.map((feature, index) => (
            <div
              className="p-4 md:w-1/3 flex flex-col text-center items-center"
              key={index}
            >
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-black mb-5 flex-shrink-0">
                <img src={feature.img_url} alt={feature.title} />
              </div>
              <div className="flex-grow">
                <h2 className="text-black dark:text-white text-lg title-font font-medium mb-3">
                  {feature.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
