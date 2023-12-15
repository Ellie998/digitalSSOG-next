import { db } from "@/lib/db";
import Link from "next/link";

const Functions = async ({
  searchParams,
}: {
  searchParams: {
    tab: string;
  };
}) => {
  const functions = await db.function.findMany({
    where: {
      category: {
        name: searchParams.tab,
      },
    },
  });

  return (
    <div>
      {!functions && <div>Loading</div>}
      {functions && (
        <div className="flex flex-col">
          {functions?.map((item) => (
            <div key={item.id}>
              <Link href={`/description/${item.title.replaceAll(" ", "-")}`}>
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Functions;
