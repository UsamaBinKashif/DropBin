/* eslint-disable react/no-unescaped-entities */

import { FileType } from "@/lib/types/typings";
import prettyBytes from "pretty-bytes";

/* eslint-disable @next/next/no-img-element */
interface FileProps {
  skeletonFiles: FileType[];
}

const Files: React.FunctionComponent<FileProps> = ({ skeletonFiles }) => {
  return (
    <section className="text-black dark:text-white ">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full ">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 ">
            Your Files
          </h1>
        </div>
        <div className="flex flex-wrap -m-2">
          {skeletonFiles.map((skeletonFile, index) => (
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/100x90"
                />
                <div className="flex-grow">
                  <h2 className=" title-font font-medium">
                    {skeletonFile.filename}
                  </h2>
                  <div>
                    <p className="text-xs">
                      size: {prettyBytes(skeletonFile.size)}
                    </p>
                    <p className="text-xs">
                      uploaded at: {skeletonFile.timestamp.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Files;
