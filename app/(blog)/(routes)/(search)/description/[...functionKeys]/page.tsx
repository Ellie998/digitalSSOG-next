import { db } from "@/lib/db";
import { decodeUrl } from "@/lib/utils";
import Link from "next/link";

import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AlertCircle } from "lucide-react";

import DescriptionBox from "@/components/description_box";
import DescriptionTitle from "@/components/description_title";
import PhoneBackground from "@/components/my-ui/phone-background";

import classes from "./page.module.css";

// or Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: {
    functionKeys: string[];
  };
}) {
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

  const num = [
    "0️⃣",
    "1️⃣",
    "2️⃣",
    "3️⃣",
    "4️⃣",
    "5️⃣",
    "6️⃣",
    "7️⃣",
    "8️⃣",
    "9️⃣",
    "🔟",
  ];

  return (
    <div className="w-full h-full">
      <section className={`w-4/5 mx-auto text-center pt-10 pb-20`}>
        <DescriptionTitle>
          <b>
            {functionData ? `${functionData.icon} ${functionData.title} ` : ""}
          </b>
          기능 소개
        </DescriptionTitle>
        <ul className="flex flex-col items-center justify-center gap-8 mx-auto my-8 md:grid md:grid-cols-2">
          <li className="w-full">
            <DescriptionBox title="특징">
              {functionData?.description}
            </DescriptionBox>
          </li>
          <li className="w-full">
            <DescriptionBox title="관련 어플">
              {functionData?.apps.map((appData) => (
                <div>{appData.appName}</div>
              ))}
            </DescriptionBox>
          </li>
        </ul>
      </section>
      {/* add guide db */}
      <section className={classes.description}>
        <DescriptionTitle>
          <b>
            {functionData ? `${functionData.icon} ${functionData.title} ` : ""}
          </b>
          기능 사용 방법
        </DescriptionTitle>

        <div>
          <ol>
            {functionData?.methods.map((method, i) => (
              <li key={method.id}>
                <Accordion type="multiple">
                  <AccordionItem value={`item-${i}`}>
                    <AccordionTrigger>{method.appName} 어플</AccordionTrigger>
                    <AccordionContent className="">
                      {method.guides?.map((guide, j) => (
                        <li key={guide.id} className="w-full pb-4 ">
                          <Link
                            className="block w-full"
                            href={`/description/${params.functionKeys[0]}/${
                              method.appName
                            }/${j + 1}`}
                            scroll={false}>
                            {num[j + 1]} {guide.description}
                          </Link>
                        </li>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>
            ))}
          </ol>
        </div>
        <div className="mx-auto my-0 ">
          <Alert variant={"ghost"}>
            <AlertCircle className="w-4 h-4 " color="red" />
            <AlertDescription className="text-sm text-slate-500">
              학습에 도움을 드리기 위해 실제 스마트폰의 모습을 본따 만든
              화면입니다.
            </AlertDescription>
          </Alert>
          <Alert variant={"ghost"}>
            <AlertCircle className="w-4 h-4" color="red" />
            <AlertDescription className="text-sm text-slate-500">
              스마트폰 기종에 따라 화면 모습에 차이가 있을 수 있습니다.
            </AlertDescription>
          </Alert>

          <PhoneBackground></PhoneBackground>
        </div>
      </section>
    </div>
  );
}
