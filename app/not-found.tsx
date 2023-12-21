import Link from "next/link";

import Navbar from "./(blog)/_components/navbar";
import { Button } from "@/components/ui/button";
import Sidebar from "./(blog)/_components/sidebar";

export default function NotFound() {
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-56 fixed z-50 w-full inset-y-0">
        <Navbar />
      </div>
      <div className="fixed inset-y-0 z-50 flex-col hidden w-56 h-full md:flex">
        <Sidebar />
      </div>
      <main className="md:pl-56  pt-[80px] h-full flex flex-col align-center justify-center mx-auto text-center mt-[20%] ">
        <h2 className="pb-4 text-4xl">Not Found</h2>
        <p>Could not find requested resource</p>
        <Button className="mx-auto mt-16 w-fit">
          <Link href="/">Return Home</Link>
        </Button>
      </main>
    </div>
  );
}
