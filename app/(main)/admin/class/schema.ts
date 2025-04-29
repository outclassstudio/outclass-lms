import { z } from "zod";

export const classDataSchema = z
  .object({
    name: z.string().trim().min(1, "클래스 이름을 입력해주세요."),
    alias: z.string().trim().min(1, "클래스의 별칭(약칭)을 입력해주세요."),
    startDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "시작일은 YYYY-MM-DD 형식이어야 합니다."),
    endDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "종료일은 YYYY-MM-DD 형식이어야 합니다."),
  })
  .refine(
    (data) => {
      const start = new Date(data.startDate);
      const end = new Date(data.endDate);
      return start < end;
    },
    {
      path: ["endDate"], // 오류 표시를 'endDate' 필드에 연결
      message: "종료일은 시작일 이후여야 합니다.",
    }
  );
