CREATE SCHEMA "todo_app";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "todo_app"."todos" (
	"id" uuid PRIMARY KEY NOT NULL,
	"user_id" text,
	"text" text,
	"completed" boolean
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_id_index" ON "todo_app"."todos" ("user_id");