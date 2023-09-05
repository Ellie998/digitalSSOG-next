// app/description/[functionName]/page.jsx
import Script from "next/script";

import FunctionDescriptionProvider from "../../../components/FunctionDescription/FunctionDescriptionProvider";
import MyLayout from "../../../components/layout/MyLayout";

export const runtime = "edge";

// or Dynamic metadata
export async function generateMetadata({ params }) {
  const functionName = decodeURI(params.functionName).replaceAll("-", " ");
  console.log(functionName);

  return {
    // metadataBase: "/",
    charset: "utf-8",
    viewport: {
      width: "device-width",
      initialScale: 1,
    },
    title: `${functionName} 기능 사용법 - 디지털쏙`,
    description: `${functionName} 기능을 사용하는 여러가지 방법을 공유합니다.`,
    url: `https://ssog.pages.dev/description/${functionName}`,
    verification: {
      naver: "55145f147d68935311d0493b0428d0a9843e5eb9",
    },
    robots: {
      index: true,
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
      title: `${functionName} 기능 사용법 - 디지털쏙`,
      description: `${functionName} 기능을 사용하는 여러가지 방법을 공유합니다.`,
      url: `https://ssog.pages.dev/description/${functionName}`,
      type: "website",
      images: [
        {
          url: "https://ssog.pages.dev/assets/ogTitle.png",
          width: 800,
          height: 400,
        },
      ],
    },
    twitter: {
      title: `${functionName} 기능 사용법 - 디지털쏙`,
      description: `${functionName} 기능을 사용하는 여러가지 방법을 공유합니다.`,
      url: `https://ssog.pages.dev/description/${functionName}`,
      type: "website",
      images: [
        {
          url: "https://ssog.pages.dev/assets/ogTitle.png",
          width: 800,
          height: 400,
        },
      ],
    },
  };
}

export default function Page() {
  return (
    <MyLayout>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-NRN6NT762E" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-NRN6NT762E');
          `}
      </Script>
      <FunctionDescriptionProvider></FunctionDescriptionProvider>
    </MyLayout>
  );
}
