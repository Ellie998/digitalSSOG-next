import { db } from "@/lib/db";
import { decodeUrl } from "@/lib/utils";
import MethodOrderForm from "./_component/method-order-form";
import MethodDescriptionForm from "./_component/method-description-form";
import MethodAppNameForm from "./_component/method-app-name-form";
import MethodFunctionNameForm from "./_component/method-function-name-form";
import GuideTable from "./_component/guide-table";

const MethodEditPage = async ({
  params,
}: {
  params: {
    functionName: string;
    appName: string;
    methodOrder: string;
  };
}) => {
  const method = await db.method.findFirst({
    where: {
      order: Number(params.methodOrder),
      functionName: decodeUrl(params.functionName),
      appName: decodeUrl(params.appName),
    },
    include: { guides: true },
  });

  const functions = await db.function.findMany();

  const guides = await db.guide.findMany({
    where: {
      methodId: method?.id,
    },
    include: { guide_component: true },
    orderBy: {
      order: "asc",
    },
  });

  return (
    <div className="flex flex-col px-10 pb-40 gap-y-20">
      <h1 className="text-xl text-center">
        <b>{decodeUrl(params.appName)}</b>어플의{" "}
        <b>{decodeUrl(params.functionName)}</b>기능의 method{params.methodOrder}{" "}
        Edit Page
      </h1>
      <>
        <MethodOrderForm order={method?.order!} id={method?.id!} />
        <MethodDescriptionForm
          description={method?.description!}
          id={method?.id!}
        />
        <MethodAppNameForm appName={method?.appName!} id={method?.id!} />

        <MethodFunctionNameForm
          functionName={method?.functionName!}
          functions={functions}
          id={method?.id!}
        />

        <GuideTable guides={guides} methodId={method?.id!} />
      </>
    </div>
  );
};

export default MethodEditPage;
