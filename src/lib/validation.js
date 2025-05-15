import { z } from "zod";

export const chapterSchema = z.object({
  title: z.string(),
  description: z.string(),
  duration: z.number(),
});

export const geminiResponseSchema = z.object({
  topicDescription: z.string(),
  chapters: z.array(chapterSchema),
});
