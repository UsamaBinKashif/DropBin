import DropZone from "@/components/common/dropzone";
import { db } from "@/lib/config/firebase.config";
import { auth } from "@clerk/nextjs";
import { collection, getDocs } from "firebase/firestore";
import { FileType } from "@/lib/types/typings";
import Files from "@/components/dashboard/Files";
const Dashboard: React.FunctionComponent = async () => {
  const { userId } = auth();
  const docsResult = await getDocs(collection(db, "users", userId!, "files"));
  const skeletonFiles: FileType[] = docsResult.docs.map((doc) => ({
    id: doc.id,
    filename: doc.data().filename || doc.id,
    timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
    fullName: doc.data().fullName,
    downloadURL: doc.data().downloadURL,
    type: doc.data().type,
    size: doc.data().size,
  }));
  return (
    <main className=" py-10 relative">
      <DropZone />
      <Files skeletonFiles={skeletonFiles} />
    </main>
  );
};

export default Dashboard;
