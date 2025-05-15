import { pgTable, text, jsonb, serial } from "drizzle-orm/pg-core";

export const courseLayout = pgTable("courseLayout", {
  id: text("id").primaryKey().notNull(),
  category: text("category").notNull(),
  topic: text("topic").notNull(),
  topicDescription: text("topic_description"),
  difficulty: text("difficulty").notNull(),
  duration: text("duration").notNull(),
  hasVideo: text("has_video").default("no").notNull(),
  noOfChapters: text("no_of_chapters").notNull(),
  chapters: jsonb("chapters").notNull(),
  userId: text("user_id"),
  courseId: text("course_id"),
});

export const chapterList = pgTable("chapterList", {
  id: serial("id").primaryKey(),
  courseId: text("course_id").notNull(),
  videoId: text("video_id"),
  chapterContent: jsonb("chapter_content").notNull(),
  userId: text("user_id").notNull(),
  topic: text("topic").notNull(),
  duration: text("duration").notNull(),
  category: text("category").notNull(),
});
