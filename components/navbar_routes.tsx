"use client";

import { BsPersonCircle } from "react-icons/bs";
import { Button } from "./ui/button";
import Link from "next/link";

const NavbarRoutes = () => {
  return (
    <div className="flex ml-auto gap-x-2">
      {window.location.hostname === "localhost" && (
        <Button variant={"secondary"}>
          <Link href={`/admin`}>Admin</Link>
        </Button>
      )}
      <BsPersonCircle size={"36"} />
    </div>
  );
};

export default NavbarRoutes;
