"use server";

import db from "@/lib/db";
import { FormError } from "@/lib/types/common";
import { chapterDataSchema } from "./schema";
import { redirect } from "next/navigation";

export async function getAllChapter(sectionId: string) {
  try {
    const result = await db.chapter.findMany({
      where: {
        sectionId,
      },
      orderBy: {
        order: "asc",
      },
    });
    return result;
  } catch (e) {
    console.error(e);
  }
}

export async function getSectionName(sectionId: string) {
  try {
    const result = await db.section.findUnique({
      where: {
        id: sectionId,
      },
      select: {
        title: true,
      },
    });
    return result;
  } catch (e) {
    console.error(e);
  }
}

export async function createChapter(_: FormError | null, formData: FormData) {
  let lastOrderNum;

  const lastSection = await db.chapter.findFirst({
    where: {
      sectionId: formData.get("section")?.toString(),
    },
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
    order: lastOrderNum,
    section: formData.get("section"),
  };
  const result = chapterDataSchema.safeParse(data);
  if (!result.success) {
    console.log(result.error.flatten());
    return result.error.flatten();
  } else {
    await db.chapter.create({
      data: {
        title: result.data.title,
        order: result.data.order,
        sectionId: result.data.section,
      },
    });
    redirect(`/admin/section/${result.data.section}`);
  }
}

export async function editChapter(
  title: string,
  order: number,
  section: string,
  chapterId: string
) {
  const data = {
    title,
    order,
    section,
  };
  const result = chapterDataSchema.safeParse(data);
  if (!result.success) {
    console.log(result.error.flatten());
    return result.error.flatten();
  } else {
    const res = await db.chapter.update({
      where: {
        id: chapterId,
      },
      data: {
        title: result.data.title,
        order: result.data.order,
        sectionId: result.data.section,
      },
    });
    return res;
  }
}

export async function deleteChapter(chapterId: string) {
  try {
    const result = await db.chapter.delete({
      where: {
        id: chapterId,
      },
    });
    return result;
  } catch (e) {
    console.error(e);
  }
}
