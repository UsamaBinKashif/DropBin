/* eslint-disable react/no-unescaped-entities */
"use client";

import { db, storage } from "@/lib/config/firebase.config";
import { formattedDate, maxSize } from "@/lib/constants";
import { useUser } from "@clerk/nextjs";
import clsx from "clsx";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import Dropzone from "react-dropzone";
import { useToast } from "../ui/use-toast";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

const DropZone: React.FunctionComponent = () => {
  const [loading, setLoading] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();
  const cancelButton = document.getElementById("cancelButton");

  const { toast } = useToast();

  const onDrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading was failed");
      reader.onload = async () => {
        await uploadPost(file);
      };
      reader.readAsArrayBuffer(file);
    });
  };

  const uploadPost = async (selectedFiles: File) => {
    if (loading || !user) return;
    setLoading(true);
    const docRef = await addDoc(collection(db, "users", user.id, "files"), {
      userId: user?.id,
      filename: selectedFiles?.name,
      fullName: user?.fullName,
      profileImage: user?.imageUrl,
      timestamp: serverTimestamp(),
      type: selectedFiles?.type,
      size: selectedFiles?.size,
    });
    const imageRef = ref(storage, `users/${user.id}/files/${docRef.id}`);
    uploadBytes(imageRef, selectedFiles).then(async (snapshot) => {
      const downloadURL = await getDownloadURL(imageRef);
      await updateDoc(doc(db, "users", user.id, "files", docRef.id), {
        downloadURL: downloadURL,
      });
    });
    if (cancelButton) {
      cancelButton.click();
    }
    toast({
      title: "Uploaded successfully.",
      description: `${formattedDate}`,
    });
    setLoading(false);
  };

  return (
    <Dropzone
      onDrop={(acceptedFiles) => onDrop(acceptedFiles)}
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
          <Drawer>
            <DrawerTrigger>
              <Button {...getRootProps()}>
                {!isDragActive &&
                  !isFileTooLarge &&
                  !loading &&
                  "Click here to upload"}
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Are you sure absolutely sure?</DrawerTitle>
                <DrawerDescription>
                  File must not be larger then 50 megabytes.
                </DrawerDescription>
              </DrawerHeader>
              <section
                className={clsx(
                  "p-20  max-w-full w-[90%] mx-auto rounded-lg cursor-pointer  ",
                  isDragActive && !isDragReject
                    ? "bg-slate-400 animate-pulse"
                    : "bg-black dark:bg-white"
                )}
              >
                <div {...getRootProps()}>
                  <input {...getInputProps()} className="w-full h-full" />
                  <p
                    className={clsx(
                      isFileTooLarge
                        ? "text-red-500"
                        : "text-white dark:text-black "
                    )}
                  >
                    {!isDragActive &&
                      !isFileTooLarge &&
                      !loading &&
                      "Click or drop a file to upload."}
                    {isDragActive &&
                      !isFileTooLarge &&
                      !isDragReject &&
                      !isFileTooLarge &&
                      !loading &&
                      "Drop this file to upload."}
                    {isDragReject &&
                      "File type not accepted, upload another file."}
                    {isFileTooLarge &&
                      "File must not be larger than 50 megabytes"}{" "}
                    {loading && (
                      <div className="flex gap-x-3">
                        Uploading
                        <div role="status">
                          <svg
                            aria-hidden="true"
                            className="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </p>
                </div>
              </section>
              <DrawerFooter>
                <DrawerClose>
                  <Button id="cancelButton" variant="default">
                    Cancel
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        );
      }}
    </Dropzone>
  );
};

export default DropZone;
