import { Api, Config, Function, StackContext } from "sst/constructs";
import { Auth } from "sst/constructs";

export function Stack({ stack }: StackContext) {
    const DATABASE_URL = new Config.Secret(stack, "DATABASE_URL");
    const backend = new Function(stack, "backend", {
        runtime: "nodejs18.x",
        handler: "src/handler.handler",
        copyFiles: [
            {
                from: "assets",
                to: "assets",
            },
        ],
        bind: [DATABASE_URL],
        url: true,
    });
    const api = new Api(stack, "api", {
        routes: {
            $default: backend,
        },
    });
    const auth = new Auth(stack, "auth", {
        authenticator: {
            handler: "src/auth.handler",
        },
    });
    auth.attach(stack, {
        api,
    });
    stack.addOutputs({
        URL: api.url,
    });
}
