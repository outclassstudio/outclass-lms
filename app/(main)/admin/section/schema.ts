import { z } from "zod";

export const sectionDataSchema = z.object({
  title: z.string().trim().min(1, "섹션 이름을 입력해주세요."),
  order: z.number().int(),
  class: z.string(),
});
