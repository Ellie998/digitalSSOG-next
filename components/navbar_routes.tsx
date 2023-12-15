"use client";

import { BsPersonCircle } from "react-icons/bs";
import { Button } from "./ui/button";
import Link from "next/link";
import { getLocationOrigin } from "next/dist/shared/lib/utils";

const NavbarRoutes = () => {
  const location = getLocationOrigin();

  return (
    <div className="flex ml-auto gap-x-2">
      {location.includes("localhost") && (
        <Button variant={"secondary"}>
          <Link href={`/admin`}>Admin</Link>
        </Button>
      )}
      <BsPersonCircle size={"36"} />
    </div>
  );
};

export default NavbarRoutes;
