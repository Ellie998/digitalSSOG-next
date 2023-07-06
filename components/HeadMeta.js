import Head from "next/head";

const HeadMeta = ({ title, description, url, image }) => {
  console.log("head meta");
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title key={title}>{title || "디지털쏙"}</title>
      <meta
        key={description}
        name="description"
        content={
          description ||
          "디지털쏙 페이지에서 스마트 기기로 할 수 있는 다양한 기능들을 만나 보세요."
        }
      />
      <meta property="type" content="website" />
      <meta
        key={url}
        property="url"
        content={url || "https://ssog.pages.dev"}
      />
      <meta
        key={image}
        property="image"
        content={image || "/assets/metaIMG.png"}
      />
      {/*  */}
      {/* <meta property="og:title" content={title || "디지털쏙"} />
      <meta
        name="og:description"
        content={
          description ||
          "디지털쏙 페이지에서 스마트 기기로 할 수 있는 다양한 기능들을 만나 보세요."
        }
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "https://ssog.pages.dev"} />
      <meta property="og:image" content={image || "/assets/metaIMG.png"} /> */}
      {/*  */}
      {/* <meta property="twitter:title" content={title || "디지털쏙"} />
      <meta
        name="twitter:description"
        content={
          description ||
          "디지털쏙 페이지에서 스마트 기기로 할 수 있는 다양한 기능들을 만나 보세요."
        }
      />
      <meta property="twitter:type" content="website" />
      <meta property="twitter:url" content={url || "https://ssog.pages.dev"} />
      <meta property="twitter:image" content={image || "/assets/metaIMG.png"} /> */}
      {/*  */}
      <link rel="icon" href="/assets/favicon/favicon.ico" />
      <link
        rel="icon"
        href="/assets/favicon/favicon-32x32.png"
        sizes="32x32"
        type="image/png"
      />
      <link
        rel="icon"
        href="/assets/favicon/favicon-16x16.png"
        sizes="16x16"
        type="image/png"
      />
      <link
        rel="apple-touch-icon"
        href="/assets/favicon/apple-touch-icon.png"
        sizes="180x180"
        type="image/png"
      />
      <link rel="manifest" href="/assets/favicon/site.webmanifest" />
      {/*  */}
      <meta
        name="naver-site-verification"
        content="55145f147d68935311d0493b0428d0a9843e5eb9"
      />
    </Head>
  );
};

export default HeadMeta;
