import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    fullName: text("full_name"),
    fullName2: text("full_name2"),
    phone: varchar("phone", { length: 256 }),
});
