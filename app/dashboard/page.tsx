import DropZone from "@/components/common/dropzone";
import BottomDrawer from "@/components/dashboard/BottomDrawer";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const Dashboard: React.FunctionComponent = () => {
  return (
    <main className="h-dvh flex items-center justify-center relative">
      <DropZone />
      {/* <BottomDrawer/> */}
    </main>
  );
};

export default Dashboard;
