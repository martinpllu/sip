import { Hono } from "hono";
import { AppWrapper, Button, ThemeProvider } from "@wealthwizards/design-system";
import React from "react";
import ReactDOMServer from "react-dom/server";

const TENANT = "turo";

const MyComponent = () => (
    <ThemeProvider tenant={TENANT}>
        <AppWrapper>
            <h1>Hello world</h1>
            <Button>Hi</Button>
            <input type="text"></input>
        </AppWrapper>
    </ThemeProvider>
);

export default new Hono().get("/", (c) => c.html(ReactDOMServer.renderToString(<MyComponent />)));
