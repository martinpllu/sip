import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import { deleteCookie } from "hono/cookie";
import { useSession } from "sst/node/auth";
import { v4 as uuidv4 } from "uuid";
import { TodoService } from "./services/todo-service";

export const app = new Hono();
app.use("/assets/*", serveStatic({ root: "./" }));

app.get("/", (c) =>
    c.html(
        <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>TodoMVC</title>
                <script src="https://unpkg.com/htmx.org@1.9.6"></script>
                <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet" />
                <link href="/assets/index.css" rel="stylesheet" />
            </head>
            <body>
                <h1>TodoMVC</h1>
                <div id="main">{useSession().type === "user" ? showTodos() : promptLogin()}</div>
            </body>
        </html>
    )
);

app.post("/add-todo", async (c) => {
    const { text } = await c.req.parseBody();
    const session = useSession();
    if (session.type === "user") {
        await TodoService.create({ id: uuidv4(), text: text as string, completed: false, user_id: session.properties.userId });
        return c.html(showTodos());
    } else {
        return c.status(401);
    }
});

app.post("/toggle-todo", async (c) => {
    const session = useSession();
    if (session.type === "user") {
        const id = c.req.query("id")!;
        await TodoService.toggle(session.properties.userId, id);
        return c.html(showTodos());
    } else {
        return c.status(401);
    }
});

app.post("/delete-todo", async (c) => {
    const session = useSession();
    if (session.type === "user") {
        const id = c.req.query("id")!;
        await TodoService.delete(session.properties.userId, id);
        return c.html(showTodos());
    } else {
        return c.status(401);
    }
});

app.get("/logout", async (c) => {
    deleteCookie(c, "auth-token");
    return c.redirect("/");
});

async function promptLogin() {
    return (
        <div class="login-message">
            <a href="#" onclick="window.location.href = '/auth/google/authorize'">
                Log in with Google
            </a>
        </div>
    );
}

async function showTodos() {
    const session = useSession();
    if (session.type !== "user") {
        return <div />;
    }
    const todos = await TodoService.list(session.properties.userId);
    return (
        <>
            <div class="login-message">
                Welcome {session.properties.firstName}&nbsp;
                <a href="/logout">Log out</a>
            </div>

            <form hx-post="/add-todo" hx-target="#main" hx-swap="innerHTML">
                <input type="text" name="text" placeholder="Add a new todo" required autofocus />
                <button type="submit">Add</button>
            </form>
            <div>
                {todos.map((todo) => (
                    <div class="todo-item" id={todo.id}>
                        <input
                            type="checkbox"
                            class="todo-complete"
                            hx-post={`/toggle-todo?id=${todo.id}`}
                            hx-target="#main"
                            hx-swap="innerHTML"
                            value={todo.id}
                            checked={todo.completed ? true : false}
                        />
                        <span class={`todo-text ${todo.completed ? "todo-completed" : ""}`}>{todo.text}</span>
                        <button
                            class="todo-delete"
                            hx-post={`/delete-todo?id=${todo.id}`}
                            hx-target="#main"
                            hx-swap="innerHTML"
                            value={todo.id}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}
