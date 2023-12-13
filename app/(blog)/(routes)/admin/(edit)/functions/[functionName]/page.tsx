import { db } from "@/lib/db";
import { decodeUrl } from "@/lib/utils";
import FunctionTitleForm from "./_components/title_form";
import FunctionDescriptionForm from "./_components/description_form";
import FunctionIconForm from "./_components/icon_form";
import FunctionCategoryForm from "./_components/category_form";
import FunctionMethodForm from "./_components/method_form";

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
      category: {},
      methods: true,
    },
  });
  const categories = await db.function_category.findMany({});

  return (
    <div className="flex flex-col px-10 pb-40 gap-y-20">
      <FunctionTitleForm title={functionData?.title || ""} />
      <FunctionDescriptionForm
        description={functionData?.description || ""}
        functionName={params.functionName}
      />
      <FunctionIconForm
        icon={functionData?.icon || ""}
        functionName={params.functionName}
      />
      <FunctionCategoryForm
        categories={categories}
        category={functionData?.category!}
        functionName={params.functionName}
      />
      <FunctionMethodForm functionName={params.functionName} />
    </div>
  );
};

export default FunctionEditPage;
