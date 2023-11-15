"use client";
import Link from "next/link";

export default function MyLink({ href, children }) {
  return (
    <Link href={href} scroll={false}>
      {children}
    </Link>
  );
}
