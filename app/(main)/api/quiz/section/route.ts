import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const sectionList = await db.section.findMany({
      orderBy: {
        order: "asc",
      },
      include: {
        class: true,
        chapters: { orderBy: { order: "asc" } },
      },
    });
    return NextResponse.json(sectionList);
  } catch (e) {
    console.error(e);
  }
}
