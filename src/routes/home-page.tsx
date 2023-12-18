import { Button, Form, Heading, Input } from "@wealthwizards/design-system";
import { Hono } from "hono";
import React from "react";
import { wrap } from "../util/react-util";

const page = (
    <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>My app</title>
            <script src="https://unpkg.com/htmx.org@1.9.6"></script>
            <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet" />
        </head>
        <body>
            <h1>Your financial wellbeing</h1>
            <Button hx-get="/form" hx-swap="outerHTML">
                Get started
            </Button>
            {/* <div
                className="spinner"
                style={{ width: "400px", height: "300px" }}
                hx-get="/my-chart"
                hx-trigger="load"
                hx-swap="outerHTML"
            ></div> */}
        </body>
    </html>
);
export default new Hono().get("/", wrap(page));
