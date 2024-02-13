import { boolean, index, pgSchema, text, uuid } from "drizzle-orm/pg-core";

export const appSchema = pgSchema("todo_app");

export const todos = appSchema.table(
    "todos",
    {
        id: uuid("id").primaryKey(),
        user_id: text("user_id"),
        text: text("text"),
        completed: boolean("completed"),
    },
    (table) => {
        return {
            userIdIndex: index("user_id_index").on(table.user_id),
        };
    }
);
