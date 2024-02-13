import { eq, sql } from "drizzle-orm";
import { db } from "../db/db";
import { todos } from "../db/schema";
import { Todo } from "./todo";

export async function createTodo(todo: Todo) {
    await db.insert(todos).values(todo);
}

export async function listTodos(user: string): Promise<Todo[]> {
    return await db
        .select()
        .from(todos)
        .where(sql`${todos.user_id} = ${user}`);
}

export async function toggleTodo(user: string, id: string) {
    await db.execute(sql`update ${todos} set completed = NOT completed where ${todos.user_id} = ${user} and ${todos.id} = ${id}`);
}

export async function deleteTodo(user: string, id: string) {
    await db.execute(sql`delete from ${todos} where ${todos.user_id} = ${user} and ${todos.id} = ${id}`);
}
