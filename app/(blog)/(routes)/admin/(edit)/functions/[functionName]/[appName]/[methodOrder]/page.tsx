import { db } from "@/lib/db";
import { decodeUrl } from "@/lib/utils";

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
      functionName: params.functionName,
      appName: params.appName,
    },
    include: { guides: true },
  });

  return (
    <div className="flex flex-col px-10 pb-40 gap-y-20">method edit page</div>
  );
};

export default MethodEditPage;
