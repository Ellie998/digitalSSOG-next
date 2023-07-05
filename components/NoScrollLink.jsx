// components/NoScrollLink.tsx
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import React, { ReactNode, useContext, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { UrlChangeDetecter } from "./UrlChangeDetecter";
import UrlContext from "./page_context/UrlContext";

const NoScrollLink = ({ children, href }) => {
  const scrollY = localStorage.getItem("scrollY");
  // const searchParams = useSearchParams();
  // const appName = searchParams.get("appName");
  // const methodId = searchParams.get("methodId");
  // const descriptionId = searchParams.get("descriptionId");
  const { urlChangeDetecter } = useContext(UrlContext);
  const parmas = urlChangeDetecter();
  // console.log(parmas);

  useEffect(() => {
    window.scrollTo({ top: scrollY, behavior: "instant" });
  }, [parmas]);

  return (
    <Link
      // {...props}
      href={href}
      scroll={false}
      onClick={(e) => {
        localStorage.setItem("scrollX", window.scrollX);
        localStorage.setItem("scrollY", window.scrollY);
        // router.push(href);

        // e.preventDefault();
        // window.history.replaceState("", "", href);
      }}>
      {children}
    </Link>
  );
};

export default NoScrollLink;
