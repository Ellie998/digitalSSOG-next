// components/UrlChangeDetecter.tsx
// import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function UrlChangeDetecter() {
  // const scrollY = localStorage.getItem("scrollY");
  const searchParams = useSearchParams();
  const appName = searchParams.get("appName");
  const methodId = searchParams.get("methodId");
  const descriptionId = searchParams.get("descriptionId");

  // useEffect(() => {
  //   window.scrollTo({ top: scrollY, behavior: "instant" });
  // }, [appName, methodId, descriptionId]);

  return { appName: appName, methodId: methodId, descriptionId: descriptionId };
}
