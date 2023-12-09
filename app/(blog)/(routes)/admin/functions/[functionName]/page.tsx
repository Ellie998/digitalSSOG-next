import { db } from "@/lib/db";
import { decodeUrl } from "@/lib/utils";
import FunctionTitleForm from "./_components/title_form";

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
    </div>
  );
};

export default FunctionEditPage;
