export const runtime = "edge";

import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="h-[80px]  lg:pl-56 fixed z-10 w-full inset-y-0">
        <Navbar />
      </div>
      <div className="fixed inset-y-0 z-50 flex-col hidden w-56 h-full lg:flex">
        <Sidebar />
      </div>
      <main className="lg:pl-56  pt-[80px] h-full">{children}</main>
    </div>
  );
};

export default BlogLayout;
