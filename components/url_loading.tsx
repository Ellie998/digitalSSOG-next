"use client";
import { useParams, usePathname, useSearchParams } from "next/navigation";

import React from "react";
import { useEffect, useState } from "react";
import { TbLoaderQuarter } from "react-icons/tb";

export default function Url_Loading() {
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();
  const [urlChanged, setUrlChanged] = useState(false);

  useEffect(() => {
    setUrlChanged(true);
  }, [pathname, params, searchParams]);
  console.log(params);
  // You can add any UI inside Loading, including a Skeleton.
  return (
    urlChanged && (
      <div className="relative flex flex-col items-center justify-center w-full h-full text-center transition-all bg-white backdrop-blur">
        <TbLoaderQuarter size={120} className="mx-auto animate-spin" />
        <div className="text-xl">LOADING...</div>
      </div>
    )
  );
}
