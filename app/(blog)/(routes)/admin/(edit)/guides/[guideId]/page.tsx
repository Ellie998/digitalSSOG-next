import { db } from "@/lib/db";
import GuideDescriptionForm from "./_components/guide-description-form";

const GuideEditPage = async ({
  params,
}: {
  params: {
    guideId: string;
  };
}) => {
  const guide = await db.guide.findUnique({
    where: {
      id: params.guideId,
    },
  });
  return (
    <div className="flex flex-col px-10 pb-40 gap-y-20">
      <h1 className="text-2xl text-center">{params.guideId}</h1>
      <div className="grid grid-cols-2 gap-x-20 gap-y-32">
        <GuideDescriptionForm
          id={params.guideId}
          description={guide?.description || ""}
        />
      </div>
    </div>
  );
};

export default GuideEditPage;
