CREATE TABLE "chapterLayout" (
	"id" integer PRIMARY KEY NOT NULL,
	"category" text NOT NULL,
	"topic" text NOT NULL,
	"topic_description" text,
	"difficulty" text NOT NULL,
	"duration" text NOT NULL,
	"has_video" boolean DEFAULT false NOT NULL,
	"no_of_chapters" integer NOT NULL,
	"chapters" jsonb NOT NULL
);
