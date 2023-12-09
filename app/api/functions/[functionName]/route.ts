import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { functionName: string } }
) {
  const values = await req.json();
  console.log(params.functionName);
  try {
    const functionData = await db.function.update({
      where: {
        title: params.functionName,
      },
      data: { ...values },
    });

    if (!functionData) {
      return new NextResponse("Internal DB Error", { status: 404 });
    }
    return NextResponse.json(functionData);
  } catch (error) {
    console.log("[FUNCTION_NAME]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
