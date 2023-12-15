import { db } from "@/lib/db";
import Link from "next/link";

const Categorires = async () => {
  const categories = await db.function_category.findMany({
    where: {},
  });

  return (
    <div>
      <div>
        {categories?.map((category) => (
          <Link
            href={{ query: { tab: category.name.replaceAll(" ", "-") } }}
            scroll={false}
            key={category.id}>
            <div className="flex text-lg gap-x-2">
              <div>{category.icon}</div>
              <div>{category.name}</div>
            </div>
          </Link>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Categorires;
