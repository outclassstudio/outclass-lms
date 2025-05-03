import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const quizList = await db.quiz.findMany({
    include: {
      chapter: {
        include: {
          section: true,
        },
      },
    },
    orderBy: [{ chapter: { order: "asc" } }, { order: "asc" }],
  });
  return NextResponse.json(quizList);
}
