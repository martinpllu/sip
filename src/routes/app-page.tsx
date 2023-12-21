import { AppWrapper, ThemeProvider } from "@wealthwizards/design-system";
import React from "react";

type PageProps = {
    children?: React.ReactNode;
};

const AppPage: React.FC<PageProps> = ({ children }) => {
    return (
        <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Financial Wellbeing</title>
                <script src="https://unpkg.com/htmx.org@1.9.6"></script>
            </head>
            <body>
                <ThemeProvider tenant="turo">
                    <AppWrapper>{children}</AppWrapper>
                </ThemeProvider>
            </body>
        </html>
    );
};

export default AppPage;
