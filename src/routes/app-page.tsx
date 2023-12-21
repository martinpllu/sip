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
                    <AppWrapper>
                        <div
                            id="heading"
                            style={{
                                backgroundColor: "black",
                                display: "flex",
                                padding: "2rem",
                                gap: "1rem",
                                alignItems: "center",
                                marginBottom: "1rem",
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
                        {children}
                    </AppWrapper>
                </ThemeProvider>
            </body>
        </html>
    );
};

export default AppPage;
