import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await req.json();
  try {
    const guide = await db.guide.delete({
      where: {
        id: params.id,
      },
    });

    if (!guide) {
      return new NextResponse("Internal DB Error", { status: 404 });
    }

    return NextResponse.json(guide);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { description, order, methodId } = await req.json();
  try {
    const guide = await db.guide.update({
      where: {
        id: params.id,
        methodId: methodId,
      },
      data: {
        description: description,
        order: order,
      },
    });

    if (!guide) {
      return new NextResponse("Internal DB Error", { status: 404 });
    }

    return NextResponse.json(guide);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
