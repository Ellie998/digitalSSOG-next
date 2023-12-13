import { db } from "@/lib/db";
import { decodeUrl } from "@/lib/utils";
import MethodOrderForm from "./_component/method-order-form";
import MethodDescriptionForm from "./_component/method-description-form";
import MethodAppNameForm from "./_component/method-app-name-form";

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

        {/* <MethodFunctionNameForm/> */}
        {/* <MethodGuideForm/> */}
      </>
    </div>
  );
};

export default MethodEditPage;
