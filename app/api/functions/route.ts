import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { functionName } = await req.json();
    const functionData = await db.function.create({
      data: {
        title: functionName,
      },
    });
    if (!functionData) {
      return new NextResponse("Internal DB Error", { status: 404 });
    }
    return NextResponse.json(functionData);
  } catch (error) {
    console.log("[FUNCTIONS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
