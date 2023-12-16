import { Hono } from "hono";
import { AppWrapper, Button, ThemeProvider } from "@wealthwizards/design-system";
import React from "react";
import ReactDOMServer from "react-dom/server";

const TENANT = "gilbert";
// const TENANT = "ruby";

const MyComponent = () => {
    return (
        <ThemeProvider tenant={TENANT}>
            <AppWrapper>
                <h1>Hello world</h1>
                <Button>Hi</Button>
            </AppWrapper>
        </ThemeProvider>
    );
};

const renderedString = ReactDOMServer.renderToString(<MyComponent />);

export default new Hono().get("/", (c) => c.html(renderedString));
