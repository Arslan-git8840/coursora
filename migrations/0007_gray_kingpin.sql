CREATE TABLE "chapterList" (
	"id" serial PRIMARY KEY NOT NULL,
	"course_id" text NOT NULL,
	"video_id" text,
	"chapter_content" jsonb NOT NULL,
	"user_id" text NOT NULL,
	"topic" text NOT NULL,
	"duration" text NOT NULL,
	"category" text NOT NULL
);
