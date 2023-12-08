// app/description/[functionKey]/page.jsx

import MyLayout from "component/layout/MyLayout";
import FunctionIntro from "component/server/templates/FunctionIntro/index";

// import { Suspense } from "react";

export const runtime = "edge";

// or Dynamic metadata
export async function generateMetadata({ params }) {
  const functionKey = decodeURI(params.functionKey[0])
    .replaceAll("-", " ")
    .replaceAll("%2C", ",");

  return {
    // metadataBase: "/",
    charset: "utf-8",
    viewport: {
      width: "device-width",
      initialScale: 1,
    },
    title: `${functionKey} 기능 사용법`,
    description: `${functionKey} 기능을 사용하는 여러가지 방법을 공유합니다.`,
    url: `https://digitalssog.com/description/${functionKey}`,
    verification: {
      naver: "55145f147d68935311d0493b0428d0a9843e5eb9",
    },
    robots: {
      index: true,
      follow: true,
    },
    keywords: ["digital", "app", "function", "description", "tech"],
    icons: {
      icon: [
        { url: "/assets/favicon/favicon.ico" },
        {
          url: "/assets/favicon/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          url: "/assets/favicon/favicon-16x16.png",
          sizes: "16x16",
          type: "image/png",
        },
      ],
      apple: [
        {
          url: "/assets/favicon/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
      manifest: "/assets/favicon/site.webmanifest",
    },
    openGraph: {
      site_name: "DigitalSSOG Description",
      title: `${functionKey} 기능 사용법 - 디지털쏙`,
      description: `${functionKey} 기능을 사용하는 여러가지 방법을 공유합니다.`,
      url: `https://digitalssog.com/description/${functionKey}`,
      type: "website",
      images: [
        {
          url: "https://digitalssog.com/assets/ogTitle.png",
          width: 800,
          height: 400,
        },
      ],
    },
    twitter: {
      title: `${functionKey} 기능 사용법 - 디지털쏙`,
      description: `${functionKey} 기능을 사용하는 여러가지 방법을 공유합니다.`,
      url: `https://digitalssog.com/description/${functionKey}`,
      type: "website",
      images: [
        {
          url: "https://digitalssog.com/assets/ogTitle.png",
          width: 800,
          height: 400,
        },
      ],
    },
  };
}

export default function Page(props) {
  return (
    <MyLayout>
      <main>
        <FunctionIntro functionName={props.params.functionKey[0]} />
      </main>
    </MyLayout>
  );
}
