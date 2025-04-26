"use server";

import db from "@/lib/db";
import { redirect } from "next/navigation";
import { classDataSchema } from "./schema";
import { Prisma } from "@prisma/client";
import { FormError } from "@/lib/types/common";

// ID로 클래스 조회
export async function getClasses() {
  const classes = await db.class.findMany();
  return classes;
}

// 전체 클래스 조회
export async function getSingleClass(id: string) {
  const classes = await db.class.findUnique({
    where: {
      id,
    },
  });
  return classes;
}
export type ClassType = Prisma.PromiseReturnType<typeof getSingleClass>;

// 클래스 추가
export async function createClass(_: FormError | null, formData: FormData) {
  const data = {
    name: formData.get("name"),
    alias: formData.get("alias"),
    startDate: formData.get("startDate"),
    endDate: formData.get("endDate"),
  };

  const result = classDataSchema.safeParse(data);

  if (!result.success) {
    console.log(result.error.flatten());
    return result.error.flatten();
  } else {
    await db.class.create({
      data: {
        name: result.data.name,
        alias: result.data.alias,
        startDate: new Date(result.data.startDate),
        endDate: new Date(result.data.endDate),
      },
    });

    redirect("/admin/class/list");
  }
}

// 클래스 수정
export async function editClass(id: string, formData: FormData) {
  const data = {
    name: formData.get("name"),
    alias: formData.get("alias"),
    startDate: formData.get("startDate"),
    endDate: formData.get("endDate"),
  };

  const result = classDataSchema.safeParse(data);

  if (!result.success) {
    console.log(result.error.flatten());
    return result.error.flatten();
  } else {
    await db.class.update({
      where: {
        id,
      },
      data: {
        name: result.data.name,
        alias: result.data.alias,
        startDate: new Date(result.data.startDate),
        endDate: new Date(result.data.endDate),
      },
    });

    redirect("/admin/class/list");
  }
}

// 클래스 삭제
export async function deleteClass(id: string) {
  try {
    const result = await db.class.delete({
      where: {
        id,
      },
    });
    return result;
  } catch (e) {
    console.error(e);
  }
}
