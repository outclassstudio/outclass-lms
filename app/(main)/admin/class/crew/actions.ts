"use server";

import db from "@/lib/db";
import { redirect } from "next/navigation";
import { Prisma } from "@prisma/client";
import { FormError } from "@/lib/types/common";
import { crewDataSchema } from "./schema";

// 클래스 이름 조회
export async function getClassName() {
  try {
    const classes = await db.class.findMany({
      select: {
        id: true,
        name: true,
        alias: true,
      },
    });

    return classes;
  } catch (e) {
    console.error(e);
  }
}
export type ClassNameListType = Prisma.PromiseReturnType<typeof getClassName>;

// 크루 불러오기
export async function getCrews() {
  try {
    const crewList = await db.user.findMany({
      include: {
        Class: true,
      },
    });
    return crewList;
  } catch (e) {
    console.error(e);
  }
}
export type CrewListType = Prisma.PromiseReturnType<typeof getCrews>;

// 아이디로 크루 불러오기
export async function getSingleCrew(id: string) {
  try {
    const crew = await db.user.findUnique({
      where: {
        id,
      },
      include: {
        Class: true,
      },
    });
    return crew;
  } catch (e) {
    console.error(e);
  }
}
export type CrewType = Prisma.PromiseReturnType<typeof getSingleCrew>;

// 크루 추가
export async function createCrew(_: FormError | null, formData: FormData) {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    class: formData.get("class"),
  };

  const result = crewDataSchema.safeParse(data);

  if (!result.success) {
    console.log(result.error.flatten());
    return result.error.flatten();
  } else {
    await db.user.create({
      data: {
        name: result.data.name,
        email: result.data.email,
        password: result.data.password,
        role: "STUDENT",
        classId: result.data.class,
      },
    });

    return null;
    // redirect("/admin/class/crew");
  }
}

// 클래스 수정
export async function editCrew(id: string, formData: FormData) {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    class: formData.get("class"),
  };

  const result = crewDataSchema.safeParse(data);

  if (!result.success) {
    console.log(result.error.flatten());
    return result.error.flatten();
  } else {
    await db.user.update({
      where: {
        id,
      },
      data: {
        name: result.data.name,
        email: result.data.email,
        password: result.data.password,
        role: "STUDENT",
        classId: result.data.class,
      },
    });

    redirect("/admin/class/crew");
  }
}

// 클래스 삭제
export async function deleteCrew(id: string) {
  try {
    const result = await db.user.delete({
      where: {
        id,
      },
    });
    return result;
  } catch (e) {
    console.error(e);
  }
}
