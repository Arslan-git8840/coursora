ALTER TABLE "courseLayout" ALTER COLUMN "has_video" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "courseLayout" ALTER COLUMN "has_video" SET DEFAULT 'no';--> statement-breakpoint
ALTER TABLE "courseLayout" ALTER COLUMN "no_of_chapters" SET DATA TYPE text;