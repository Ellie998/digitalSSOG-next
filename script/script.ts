import { PrismaClient } from "@prisma/client";
import { db } from "../lib/db";

const prisma = new PrismaClient();

async function main() {
  const categories = await db.function_category.createMany({
    data: [
      {
        name: "sns",
        icon: "❤️",
      },
      {
        name: "문자",
        icon: "💬",
      },
      {
        name: "전화",
        icon: "📞",
      },
    ],
  });
  console.log("Category Add Success");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
