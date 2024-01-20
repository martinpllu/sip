import * as React from "react";
import { renderToPipeableStream } from "react-dom/server";
import { Writable } from "stream";

export function renderToString(Component: React.ReactElement): Promise<string> {
    return new Promise((resolve, reject) => {
        let htmlContent = "";

        const mockStream = new Writable({
            write(chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void) {
                htmlContent += chunk.toString();
                callback();
            },
            final(callback: (error?: Error | null) => void) {
                resolve(htmlContent);
                callback();
            },
        });

        const { pipe, abort } = renderToPipeableStream(Component, {
            onShellReady() {
                pipe(mockStream);
            },
            onError(error: unknown) {
                if (error instanceof Error) {
                    reject(error);
                } else {
                    reject(new Error("An error occurred during server-side rendering"));
                }
            },
        });
    });
}
