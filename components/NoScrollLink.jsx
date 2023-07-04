// components/NoScrollLink.tsx
import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";

const NoScrollLink = ({ children, ...props }) => {
  return (
    <Link {...props} scroll={false}>
      {children}
    </Link>
  );
};

export default NoScrollLink;
