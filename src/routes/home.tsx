import { Button } from "@wealthwizards/design-system";
import { Hono } from "hono";
import React from "react";
import ReactDOMServer from "react-dom/server";
import AppPage from "./app-page";

export default new Hono().get("/", (c) =>
    c.html(
        ReactDOMServer.renderToString(
            <AppPage>
                <a href="your-details">
                    <Button>Get started</Button>
                </a>
            </AppPage>
        )
    )
);
