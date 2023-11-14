import Note from "component/server/molecules/Note/index";
import IndexFunctionsPostit from "component/server/organisms/IndexFunctionsPostit/index";

export const metadata = {
  // metadataBase: "/",
  charset: "utf-8",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  title: "디지털쏙",
  description:
    "디지털쏙 페이지에서 스마트 기기로 할 수 있는 다양한 기능들을 만나 보세요.",
  url: "https://digitalssog.com",
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
    site_name: "DigitalSSOG",
    title: "디지털쏙",
    description:
      "디지털쏙 페이지에서 스마트 기기로 할 수 있는 다양한 기능들을 만나 보세요.",
    type: "website",
    url: "https://digitalssog.com",
    images: [
      {
        url: "https://digitalssog.com/assets/ogTitle.png",
        width: 800,
        height: 400,
      },
    ],
  },
  twitter: {
    title: "디지털쏙",
    description:
      "디지털쏙 페이지에서 스마트 기기로 할 수 있는 다양한 기능들을 만나 보세요.",
    type: "website",
    url: "https://digitalssog.com",
    images: [
      {
        url: "https://digitalssog.com/assets/ogTitle.png",
        width: 800,
        height: 400,
      },
    ],
  },
};

export default function Page(props) {
  return (
    <>
      <main>
        <section className="max-w-3xl mx-auto my-0">
          <Note
            title={"스마트 기기로 사용 가능한 기능들"}
            subTitle={
              "카테고리를 누르면 카테고리에 속하는 기능들을 볼 수 있습니다."
            }
            holeNum={17}>
            <IndexFunctionsPostit
              tabName={
                props.searchParams.tab === "전화"
                  ? "call"
                  : props.searchParams.tab === "문자"
                  ? "message"
                  : props.searchParams.tab
              }
            />
          </Note>
        </section>
      </main>
    </>
  );
}
