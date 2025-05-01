import { z } from "zod";

export const quizDataSchema = z.object({
  title: z.string().trim().min(1, "퀴즈 이름을 입력해주세요."),
  description: z.string(),
  chapterId: z.string(),
  order: z.number().int(),
});
