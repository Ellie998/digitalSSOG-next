// components/NoScrollLink.tsx
import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";

const NoScrollLink = ({ children, href }) => {
  return (
    <Link
      // {...props}
      href={href}
      scroll={false}
      onClick={(e) => {
        e.preventDefault();
        window.history.replaceState("", "", href);
        console.log("clicked");
      }}>
      {children}
    </Link>
  );
};

export default NoScrollLink;
