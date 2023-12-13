import { Method } from "@prisma/client";

import { MethodDataTable } from "./method_data_table";
import { columns } from "./method_colums";
import { db } from "@/lib/db";

const FunctionMethodForm = async ({
  functionName,
}: {
  functionName: string;
}) => {
  const methods = await db.method.findMany({
    where: {
      functionName: decodeURI(functionName),
    },
    include: { guides: true },
    orderBy: {
      order: "desc",
    },
  });

  return (
    <div className="w-full p-6 shadow-md">
      <div className="">Linked Methods</div>
      <MethodDataTable
        columns={columns}
        data={methods?.map((method) => ({
          id: method.id,
          order: method.order,
          description: method.description,
          guideLength: method.guides.length,
          appName: method.appName,
        }))}
      />
    </div>
  );
};

export default FunctionMethodForm;
