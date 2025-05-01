"use server";

import db from "@/lib/db";
import { FormError } from "@/lib/types/common";
import { Prisma } from "@prisma/client";
import { quizDataSchema } from "./schema";

// 전체 섹션 조회
export async function getAllSectionChapter() {
  try {
    const sectionList = await db.section.findMany({
      orderBy: {
        order: "asc",
      },
      include: {
        class: true,
        chapters: true,
      },
    });
    return sectionList;
  } catch (e) {
    console.error(e);
  }
}
export type SectionChapterListType = Prisma.PromiseReturnType<
  typeof getAllSectionChapter
>;

export async function getAllQuizzes() {
  try {
    const quizList = await db.quiz.findMany({
      include: {
        chapter: {
          include: {
            section: true,
          },
        },
      },
      orderBy: {
        order: "asc",
      },
    });
    return quizList;
  } catch (e) {
    console.error(e);
  }
}
export type QuizListType = Prisma.PromiseReturnType<typeof getAllQuizzes>;

export async function getOneQuiz(id: string) {
  try {
    const quizList = await db.quiz.findUnique({
      where: {
        id,
      },
      include: {
        chapter: {
          include: {
            section: true,
          },
        },
      },
    });
    return quizList;
  } catch (e) {
    console.error(e);
  }
}
export type QuizType = Prisma.PromiseReturnType<typeof getOneQuiz>;

export async function createQuiz(_: FormError | null, formData: FormData) {
  let lastOrderNum;
  const lastSection = await db.quiz.findFirst({
    orderBy: {
      order: "desc",
    },
    select: {
      order: true,
    },
  });

  if (!lastSection) {
    lastOrderNum = 1;
  } else {
    lastOrderNum = lastSection.order + 1;
  }

  const data = {
    title: formData.get("title"),
    description: formData.get("description"),
    chapterId: formData.get("chapterId"),
    order: lastOrderNum,
  };

  const result = quizDataSchema.safeParse(data);
  if (!result.success) {
    console.log(result.error.flatten());
    return result.error.flatten();
  } else {
    await db.quiz.create({
      data: {
        title: result.data.title,
        description: result.data.title,
        chapterId: result.data.chapterId,
        order: result.data.order,
      },
    });

    return null;
  }
}

export async function editQuiz(
  title: string,
  description: string,
  chapterId: string,
  quizId: string,
  order: number
) {
  const data = {
    title,
    description,
    chapterId,
    order,
  };

  const result = quizDataSchema.safeParse(data);
  if (!result.success) {
    console.log(result.error.flatten());
    return result.error.flatten();
  } else {
    await db.quiz.update({
      where: {
        id: quizId,
      },
      data: {
        title: result.data.title,
        description: result.data.title,
        chapterId: result.data.chapterId,
        order: result.data.order,
      },
    });

    return null;
  }
}

export async function deleteQuiz(quizId: string) {
  try {
    const result = await db.quiz.delete({
      where: {
        id: quizId,
      },
    });
    return result;
  } catch (e) {
    console.error(e);
  }
}
