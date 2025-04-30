import { z } from "zod";

export const chapterDataSchema = z.object({
  title: z.string().trim().min(1, "챕터 이름을 입력해주세요."),
  order: z.number().int(),
  section: z.string(),
});
