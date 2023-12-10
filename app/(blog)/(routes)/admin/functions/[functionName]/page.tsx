import { db } from "@/lib/db";
import { decodeUrl } from "@/lib/utils";
import FunctionTitleForm from "./_components/title_form";
import FunctionDescriptionForm from "./_components/description_form";
import FunctionIconForm from "./_components/icon_form";

const FunctionEditPage = async ({
  params,
}: {
  params: {
    functionName: string;
  };
}) => {
  const functionData = await db.function.findUnique({
    where: {
      title: decodeUrl(params.functionName),
    },
    include: {
      apps: true,
      category: true,
      methods: true,
    },
  });

  return (
    <div>
      <FunctionTitleForm title={functionData?.title || ""} />
      <FunctionDescriptionForm
        description={functionData?.description || ""}
        functionName={params.functionName}
      />
      <FunctionIconForm
        icon={functionData?.icon || ""}
        functionName={params.functionName}
      />
    </div>
  );
};

export default FunctionEditPage;
