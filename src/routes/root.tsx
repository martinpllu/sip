import { Hono } from "hono";

export default new Hono().get("/", (c) =>
    c.html(
        <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>My app</title>
                <script src="https://unpkg.com/htmx.org@1.9.6"></script>
                <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet" />
                <link href="/index.css" rel="stylesheet" />
            </head>
            <body>
                <h1>Daily fluctuations</h1>
                <div
                    class="spinner"
                    style={{ width: "400px", height: "300px" }}
                    hx-get="/my-chart"
                    hx-trigger="load"
                    hx-swap="outerHTML"
                ></div>
            </body>
        </html>
    )
);
