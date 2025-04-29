"use server";

import db from "@/lib/db";
import { redirect } from "next/navigation";
import { sectionDataSchema } from "./schema";
import { Prisma } from "@prisma/client";
import { FormError } from "@/lib/types/common";

// 전체 섹션 조회
export async function getAllSection() {
  try {
    const sectionList = await db.section.findMany({
      orderBy: {
        order: "asc",
      },
      include: {
        class: true,
      },
    });
    return sectionList;
  } catch (e) {
    console.error(e);
  }
}
export type SectionListType = Prisma.PromiseReturnType<typeof getAllSection>;

// 단일 섹션 조회
export async function getSingleSection(id: string) {
  try {
    const section = await db.section.findUnique({
      where: {
        id,
      },
      include: {
        class: true,
      },
    });
    return section;
  } catch (e) {
    console.error(e);
  }
}
export type TargetSectionType = Prisma.PromiseReturnType<
  typeof getSingleSection
>;

// 섹션 추가
export async function createSection(_: FormError | null, formData: FormData) {
  let lastOrderNum;
  const lastSection = await db.section.findFirst({
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
    class: formData.get("class"),
  };
  const result = sectionDataSchema.safeParse(data);
  if (!result.success) {
    console.log(result.error.flatten());
    return result.error.flatten();
  } else {
    await db.section.create({
      data: {
        title: result.data.title,
        order: result.data.order,
        classId: result.data.class,
      },
    });
    redirect("/admin/section");
  }
}

// 섹션 수정
export async function editSection(
  id: string,
  order: number,
  formData: FormData
) {
  const data = {
    title: formData.get("title"),
    order,
    class: formData.get("class"),
  };
  const result = sectionDataSchema.safeParse(data);
  if (!result.success) {
    console.log(result.error.flatten());
    return result.error.flatten();
  } else {
    await db.section.update({
      where: {
        id,
      },
      data: {
        title: result.data.title,
        classId: result.data.class,
      },
    });
    redirect("/admin/section");
  }
}

// 섹션 삭제
export async function deleteSection(id: string) {
  try {
    const result = await db.section.delete({
      where: {
        id,
      },
    });
    return result;
  } catch (e) {
    console.error(e);
  }
}
