import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { functionName: string } }
) {
  try {
    const { order, description, appName } = await req.json();
    const method = await db.method.create({
      data: {
        order: order,
        description: description,
        appName: appName,
        functionName: params.functionName,
      },
    });
    if (!method) {
      return new NextResponse("Internal DB Error", { status: 404 });
    }
    return NextResponse.json(method);
  } catch (error) {
    console.log("[METHODS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
