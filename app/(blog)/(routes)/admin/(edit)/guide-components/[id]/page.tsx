import { db } from "@/lib/db";

const GuideComponentEditPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const guide_component = await db.guide_component.findUnique({
    where: {
      id: params.id,
    },
  });

  return (
    <div className="flex flex-col px-10 pb-40 gap-y-20">
      <h1 className="text-2xl text-center">{guide_component?.id}</h1>

      <div className="grid grid-cols-2 gap-x-20 gap-y-32">
        {/* <GuideDescriptionForm
          id={params.guideId}
          description={guide?.description || ""}
        />
        <GuideOrderForm id={params.guideId} order={guide?.order || null} /> */}
      </div>
    </div>
  );
};

export default GuideComponentEditPage;
