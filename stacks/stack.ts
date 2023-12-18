import { Config, Function, StackContext } from "sst/constructs";

export function Stack({ stack }: StackContext) {
    const DB_CONNECTION_STRING = new Config.Secret(stack, "DB_CONNECTION_STRING");
    const backend = new Function(stack, "backend", {
        bind: [DB_CONNECTION_STRING],
        runtime: "nodejs18.x",
        handler: "src/handler.handler",
        copyFiles: [
            {
                from: "assets",
                to: "assets",
            },
        ],
        url: true,
    });
    stack.addOutputs({
        URL: backend.url,
    });
}
