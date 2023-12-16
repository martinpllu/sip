import ReactDOMServer from "react-dom/server";
import { AppWrapper, ThemeProvider } from "@wealthwizards/design-system";
import React from "react";

export function wrap(element: JSX.Element) {
    return ReactDOMServer.renderToString(
        <ThemeProvider tenant="turo">
            <AppWrapper>{element}</AppWrapper>
        </ThemeProvider>
    );
}
