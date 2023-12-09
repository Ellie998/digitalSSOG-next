import DescriptionBox from "@/components/description_box";
import DescriptionTitle from "@/components/description_title";
import { db } from "@/lib/db";

import { decodeUrl } from "@/lib/utils";

// or Dynamic metadata
export async function generateMetadata({ params }: any) {
  const functionName = decodeUrl(params.functionKeys[0]);

  return {
    // metadataBase: "/",
    charset: "utf-8",
    viewport: {
      width: "device-width",
      initialScale: 1,
    },
    title: `${functionName} 기능 사용법`,
    description: `${functionName} 기능을 사용하는 여러가지 방법을 공유합니다.`,
    url: `https://digitalssog.com/description/${functionName}`,
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
      title: `${functionName} 기능 사용법 - 디지털쏙`,
      description: `${functionName} 기능을 사용하는 여러가지 방법을 공유합니다.`,
      url: `https://digitalssog.com/description/${functionName}`,
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
      title: `${functionName} 기능 사용법 - 디지털쏙`,
      description: `${functionName} 기능을 사용하는 여러가지 방법을 공유합니다.`,
      url: `https://digitalssog.com/description/${functionName}`,
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

export default async function FunctionDescriptionPage({
  params,
}: {
  params: {
    functionKeys: string[];
  };
}) {
  const functionData = await db.function.findUnique({
    where: {
      title: decodeUrl(params.functionKeys[0]),
    },
    include: {
      apps: true,
      methods: {
        include: {
          guides: {
            include: {
              guide_component: true,
            },
          },
        },
      },
    },
  });

  return (
    <div>
      <DescriptionTitle>
        {functionData ? `${functionData.icon} ${functionData.title}` : ""}
      </DescriptionTitle>
      <div className="flex justify-around w-full">
        <DescriptionBox>
          <>
            <div>특징</div>
            {functionData?.description}
          </>
        </DescriptionBox>
        <DescriptionBox>
          <>
            <div>관련 어플</div>
            {functionData?.apps.map((appData) => <div>{appData.appName}</div>)}
          </>
        </DescriptionBox>
      </div>
      {/* add guide db */}
      <div>
        {functionData?.methods.map((method) => (
          <div key={method.id}>
            {method.description ? method.description : "no description"}
            {method.guides?.map((guide) => <div>{guide.description}</div>)}
          </div>
        ))}
      </div>
    </div>
  );
}
