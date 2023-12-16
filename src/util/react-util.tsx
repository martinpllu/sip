import ReactDOMServer from "react-dom/server";
import { AppWrapper, ThemeProvider } from "@wealthwizards/design-system";
import React from "react";
import { Context } from "hono";

export function wrap(element: JSX.Element) {
    return (c: Context) => {
        return c.html(
            ReactDOMServer.renderToString(
                <ThemeProvider tenant="turo">
                    <AppWrapper>{element}</AppWrapper>
                </ThemeProvider>
            )
        );
    };
}
