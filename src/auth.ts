import { AuthHandler, GoogleAdapter, Session } from "sst/node/auth";

declare module "sst/node/auth" {
    export interface SessionTypes {
        user: {
            userId: string;
            firstName: string;
        };
    }
}

export const handler = AuthHandler({
    providers: {
        google: GoogleAdapter({
            mode: "oidc",
            clientID: "1055443311100-udjq4bp65a45fq9s9n6u9ksu8m50cj4b.apps.googleusercontent.com",
            onSuccess: async (tokenset) => {
                return Session.cookie({
                    redirect: "/",
                    type: "user",
                    properties: {
                        userId: tokenset.claims().email,
                        firstName: tokenset.claims().given_name,
                    },
                    options: {
                        expiresIn: 1000 * 60 * 60 * 24,
                    },
                });
            },
        }),
    },
});
