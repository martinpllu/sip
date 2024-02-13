import { sql } from "drizzle-orm";
import { db } from "../db/db";
import { todos } from "../db/schema";
import { Todo } from "./todo";

export const TodoService = {
    create: async function (todo: Todo) {
        await db.insert(todos).values(todo);
    },
    list: async function (user: string): Promise<Todo[]> {
        return await db
            .select()
            .from(todos)
            .where(sql`${todos.user_id} = ${user}`);
    },
    toggle: async function (user: string, id: string) {
        await db.execute(sql`update ${todos} set completed = NOT completed where ${todos.user_id} = ${user} and ${todos.id} = ${id}`);
    },
    delete: async function (user: string, id: string) {
        await db.execute(sql`delete from ${todos} where ${todos.user_id} = ${user} and ${todos.id} = ${id}`);
    },
};
