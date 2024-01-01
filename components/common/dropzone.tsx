/* eslint-disable react/no-unescaped-entities */
"use client";
import { maxSize } from "@/lib/constants";
import clsx from "clsx";
import Dropzone from "react-dropzone";

const DropZone: React.FunctionComponent = () => {
  return (
    <Dropzone
      onDrop={(acceptedFiles) => console.log(acceptedFiles)}
      maxSize={maxSize}
    >
      {({
        getRootProps,
        getInputProps,
        isDragActive,
        isDragReject,
        acceptedFiles,
        fileRejections,
      }) => {
        const isFileTooLarge =
          fileRejections.length > 0 && fileRejections[0].file.size > maxSize;

        return (
          <section
            className={clsx(
              "p-20  max-w-full cursor-pointer w-[90%] mx-auto rounded-lg  ",
              isDragActive && !isDragReject
                ? "bg-slate-400"
                : "bg-gray-200 dark:bg-gray-500"
            )}
          >
            <div {...getRootProps()}>
              <input {...getInputProps()} className="w-full h-full" />
              <p
                className={clsx(
                  isFileTooLarge
                    ? "text-red-500"
                    : "text-black dark:text-white "
                )}
              >
                {!isDragActive &&
                  !isFileTooLarge &&
                  "Click here or drop a file to upload."}
                {isDragActive &&
                  !isFileTooLarge &&
                  !isDragReject &&
                  !isFileTooLarge &&
                  "Drop this file to upload."}
                {isDragReject && "File type not accepted, upload another file."}
                {isFileTooLarge &&
                  "File must not be larger than 50 megabytes"}{" "}
              </p>
            </div>
          </section>
        );
      }}
    </Dropzone>
  );
};

export default DropZone;
