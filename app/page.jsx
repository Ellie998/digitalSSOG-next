// app/page.jsx
import Index from "../components/layout/Index";
import MyLayout from "../components/layout/MyLayout";
export const runtime = "edge";
{
  /*   
<meta itemprop="image" content="http://ssog.pages.dev/metaIMG.png" />
*/
}
export const metadata = {
  charset: "utf-8",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  title: "디지털쏙",
  description:
    "디지털쏙 페이지에서 스마트 기기로 할 수 있는 다양한 기능들을 만나 보세요.",
  url: "https://ssog.pages.dev",
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
    title: "디지털쏙",
    description:
      "디지털쏙 페이지에서 스마트 기기로 할 수 있는 다양한 기능들을 만나 보세요.",
    type: "website",
    url: "https://ssog.pages.dev",
    image: "/assets/metaIMG.png",
  },
  twitter: {
    title: "디지털쏙",
    description:
      "디지털쏙 페이지에서 스마트 기기로 할 수 있는 다양한 기능들을 만나 보세요.",
    type: "website",
    url: "https://ssog.pages.dev",
    image: "/assets/metaIMG.png",
  },
};

export default function Page() {
  return (
    <MyLayout>
      <Index></Index>
    </MyLayout>
  );
}
