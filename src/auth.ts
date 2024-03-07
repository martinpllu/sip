import { AuthHandler, GoogleAdapter, Session } from "sst/node/auth";
import { Config } from "sst/node/config";

declare module "sst/node/auth" {
    export interface SessionTypes {
        user: {
            userId: string;
            firstName: string;
        };
    }
}

const clientID = (Config as any)["CLIENT_ID"];

export const handler = AuthHandler({
    providers: {
        google: GoogleAdapter({
            mode: "oidc",
            clientID,
            onSuccess: async (tokenset) => {
                return Session.cookie({
                    redirect: "/",
                    type: "user",
                    properties: {
                        userId: tokenset.claims().email!,
                        firstName: tokenset.claims().given_name!,
                    },
                    options: {
                        expiresIn: 1000 * 60 * 60 * 24,
                    },
                });
            },
        }),
    },
});
