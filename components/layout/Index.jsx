"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { default as StoryIndex } from "stories/page/pages/Index/index";

function Index() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [tabName, setTabName] = useState(searchParams.get("tab"));
  let temp = 0;

  useEffect(() => {
    window.onpopstate = function () {
      const url = decodeURI(window.location);
      if (temp === 1) {
        return;
      }
      if (url.includes("=")) {
        const tabNameFromUrl = url.split("=");
        setTabName(tabNameFromUrl[1]);
      } else {
        router.push(url, { scroll: false });
      }
      temp++;
    };
  }, []);

  return <StoryIndex tabName={tabName} setTabName={setTabName} />;
}

export default Index;
