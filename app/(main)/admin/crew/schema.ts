import { z } from "zod";

export const crewDataSchema = z.object({
  name: z.string().trim().min(1, "크루 이름을 입력해주세요."),
  email: z.string().email("이메일을 입력해주세요."),
  password: z.string().min(4, "4글자 이상을 입력해주세요"),
  class: z.string(),
});
