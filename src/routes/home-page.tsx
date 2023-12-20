import React from "react";
import { Button, Heading } from "@wealthwizards/design-system";
import { Hono } from "hono";
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
            <div
                id="heading"
                style={{
                    backgroundColor: "black",
                    display: "flex",
                    padding: "2rem",
                    gap: "1rem",
                    alignItems: "center",
                }}
            >
                <img
                    width="50px"
                    height="50px"
                    src="https://cdn.wealthwizards.io/static/turo/W_Mark_White250x277.png"
                    alt="Wealth Wizards Logo"
                />
                <h1 style={{ color: "white" }}>Financial Wellbeing</h1>
            </div>
            <div id="container">
                <Button hx-get="/your-details" hx-swap="outerHTML" hx-target="#container">
                    Get started
                </Button>
            </div>
        </body>
    </html>
);
export default new Hono().get("/", wrap(page));
