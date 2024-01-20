import React from "react";

type PageProps = {
    children?: React.ReactNode;
};

const Page: React.FC<PageProps> = ({ children }) => {
    return (
        <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Your Retirement</title>
                <script src="https://unpkg.com/htmx.org@1.9.6"></script>
                <style>
                    {`style {
                        display: none !important;
                    }`}
                </style>
                <link
                    href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;700;900&amp;display=swap"
                    rel="stylesheet"
                    type="text/css"
                ></link>
            </head>
            <body>
                <div id="main">{children}</div>
            </body>
        </html>
    );
};

export default Page;
