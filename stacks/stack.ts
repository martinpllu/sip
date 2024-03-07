import { Api, Config, Function, StackContext } from "sst/constructs";
import { Auth } from "sst/constructs";

export function Stack({ stack }: StackContext) {
    const DATABASE_CONNECTION_STRING = new Config.Secret(stack, "DATABASE_CONNECTION_STRING");
    const CLIENT_ID = new Config.Secret(stack, "CLIENT_ID");
    const backend = new Function(stack, "backend", {
        runtime: "nodejs18.x",
        handler: "src/handler.handler",
        copyFiles: [
            {
                from: "assets",
                to: "assets",
            },
        ],
        bind: [DATABASE_CONNECTION_STRING],
        url: false,
    });
    const api = new Api(stack, "api", {
        routes: {
            $default: backend,
        },
    });
    const auth = new Auth(stack, "auth", {
        authenticator: {
            handler: "src/auth.handler",
            bind: [CLIENT_ID],
        },
    });
    auth.attach(stack, {
        api,
    });
    stack.addOutputs({
        URL: api.url,
    });
}
