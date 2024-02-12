import { Api, Function, StackContext } from "sst/constructs";

export function Stack({ stack }: StackContext) {
    const backend = new Function(stack, "backend", {
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
    const api = new Api(stack, "api", {
        routes: {
            $default: backend,
        },
    });
    stack.addOutputs({
        URL: api.url,
    });
}
