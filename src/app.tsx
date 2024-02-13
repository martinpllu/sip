import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import { deleteCookie } from "hono/cookie";
import { useSession } from "sst/node/auth";
import { v4 as uuidv4 } from "uuid";

const todos = [];

function renderTodos() {
    const session = useSession();
    return (
        <div id="main">
            <h1>TodoMVC</h1>
            {session.type !== "user" && (
                <div class="login-message">
                    <a href="#" onclick="window.location.href = '/auth/google/authorize'">
                        Log in with Google to save your todos
                    </a>
                </div>
            )}
            {session.type === "user" && (
                <div class="login-message">
                    Welcome {session.properties.firstName}&nbsp;
                    <a href="/logout">Log out</a>
                </div>
            )}
            <form hx-post="/add-todo" hx-target="#main" hx-swap="outerHTML">
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
                            hx-swap="outerHTML"
                            value={todo.id}
                            checked={todo.completed ? true : false}
                        />
                        <span class={`todo-text ${todo.completed ? "todo-completed" : ""}`}>{todo.text}</span>
                        <button
                            class="todo-delete"
                            hx-post={`/delete-todo?id=${todo.id}`}
                            hx-target="#main"
                            hx-swap="outerHTML"
                            value={todo.id}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

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
            <body>{renderTodos()}</body>
        </html>
    )
);

app.post("/add-todo", async (c) => {
    const { text } = await c.req.parseBody();
    const newTodo = { id: uuidv4(), text, completed: false };
    todos.push(newTodo);
    return c.html(renderTodos());
});

app.post("/toggle-todo", async (c) => {
    const id = c.req.query("id");
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
        todo.completed = !todo.completed;
    }
    return c.html(renderTodos());
});

app.post("/delete-todo", async (c) => {
    const id = c.req.query("id");
    const index = todos.findIndex((todo) => todo.id === id);
    if (index > -1) {
        todos.splice(index, 1);
    }
    return c.html(renderTodos());
});

app.get("/logout", async (c) => {
    deleteCookie(c, "auth-token");
    return c.redirect("/");
});
