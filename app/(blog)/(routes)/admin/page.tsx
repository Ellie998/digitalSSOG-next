import { Button } from "@/components/ui/button";
import Link from "next/link";

const AdminPage = () => {
  return (
    <div>
      <Button className="block ml-auto">
        <Link href={"/admin/create/functions"}>
          Create Function description
        </Link>
      </Button>
    </div>
  );
};

export default AdminPage;
