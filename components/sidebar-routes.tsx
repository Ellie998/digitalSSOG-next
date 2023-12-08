import Link from "next/link";
import { BsPersonCircle } from "react-icons/bs";

const SidebarRoutes = () => {
  return (
    <div className="flex flex-col w-full pl-6">
      <Link href={"/description/function"}>기능 메인</Link>
      <Link href={"/description/app"}>앱 메인</Link>
    </div>
  );
};

export default SidebarRoutes;
