import { Config, Function, StackContext } from "sst/constructs";

export function Stack({ stack }: StackContext) {
    const backend = new Function(stack, "backend", {
        runtime: "nodejs18.x",
        handler: "src/util/lambda-handler.handler",
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
