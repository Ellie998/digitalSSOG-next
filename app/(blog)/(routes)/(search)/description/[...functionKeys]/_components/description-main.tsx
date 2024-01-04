import Link from "next/link";
import {
  Function as FunctionData,
  // Method,
  Guide,
  // Guide_component,
} from "@prisma/client";

import { decodeUrl } from "@/lib/utils";
import { Alert, AlertDescription } from "@/components/ui/alert";
import DescriptionTitle from "@/components/description_title";
import PhoneBackground from "@/components/my-ui/phone-background";
import { AlertCircle } from "lucide-react";
import classes from "./description-main.module.css";

export default async function DescriptionMain({
  params,
  functionData,
  methods,
  uniqueApps,
}: {
  functionData: FunctionData | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  methods: Array<any>;
  // methods: Array<Method & Array<Guide & Guide_component>>;
  uniqueApps: Array<string | null>;
  params: {
    functionKeys: string[];
  };
}) {
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
    <section className={classes.description}>
      <DescriptionTitle>
        <b>
          {functionData ? `${functionData.icon} ${functionData.title} ` : ""}
        </b>
        기능 사용 방법
      </DescriptionTitle>

      <div>
        <ol>
          {uniqueApps?.map((appName, i) => (
            <li key={"appName" + i} className={`pb-2 `}>
              <details
                className="transition-all"
                open={appName === decodeUrl(params.functionKeys[1])}>
                <summary className="text-lg">{appName} 어플</summary>

                {methods.map(
                  (method) =>
                    method.appName === appName && (
                      <ul key={"method-container" + method.id}>
                        <li
                          className="w-full pb-4 ml-4 "
                          key={"method" + method.order}>
                          <details
                            open={method.order + "" === params.functionKeys[2]}>
                            <summary className="mb-2">
                              방법 {method.order}. {method.description}
                            </summary>

                            {method.guides?.map((guide: Guide, j: number) => (
                              <li
                                key={guide.id}
                                className="w-full pb-4 ml-4 hover:underline ">
                                <Link
                                  className={`block w-full ${
                                    method.appName ===
                                      decodeUrl(params.functionKeys[1]) &&
                                    method.order + "" ===
                                      params.functionKeys[2] &&
                                    j + 1 + "" === params.functionKeys[3]
                                      ? "font-bold"
                                      : ""
                                  }`}
                                  href={`/description/${
                                    params.functionKeys[0]
                                  }/${method.appName}/${method.order}/${j + 1}`}
                                  scroll={false}>
                                  {num[j + 1]} {guide.description}
                                </Link>
                              </li>
                            ))}
                          </details>
                        </li>
                      </ul>
                    )
                )}
              </details>
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
  );
}
