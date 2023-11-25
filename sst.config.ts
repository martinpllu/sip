import { SSTConfig } from "sst";
import { Stack } from "./stacks/stack";

export default {
    config(_input) {
        return {
            name: "sip",
            region: "eu-west-1",
        };
    },
    stacks(app) {
        app.stack(Stack);
    },
} satisfies SSTConfig;
