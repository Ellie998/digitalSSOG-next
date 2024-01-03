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
        <ul className="flex flex-col text-left gap-y-5">
          {functions?.map((item) => (
            <li
              key={item.id}
              className="flex border-b-[0.5px] border-slate-300 ">
              <Link href={`/description/${item.title.replaceAll(" ", "-")}`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Functions;
