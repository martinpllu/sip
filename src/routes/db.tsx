import { Hono } from "hono";
import { db } from "../db/db";
import { users } from "../db/schema";

console.time("insert");
await db.insert(users).values({
    fullName: "Blee",
    phone: "1234",
});

console.timeEnd("insert");
console.time("select");
const result = await db.select().from(users);
console.timeEnd("select");

export default new Hono().get("/", (c) => {
    return c.html(JSON.stringify(result));
});
console.log("foo");
