import React from "react";
import ReactDOMServer from "react-dom/server";
import { Hono } from "hono";
import { AppWrapper, Button, Form, Heading, Input, ThemeProvider } from "@wealthwizards/design-system";

const TENANT = "turo";
const form = (
    <ThemeProvider tenant={TENANT}>
        <AppWrapper>
            <Form action="/foo/bar">
                <Heading size="l" type="h1">
                    Personal Details!
                </Heading>
                <Input>
                    <Input.Label>What is your name?</Input.Label>
                    <Input.TextInput size="s" placeholder="Karen" />
                    <Input.HelperLabel>Optional helper copy.</Input.HelperLabel>
                </Input>
                <Input>
                    <Input.Label>How old are you?</Input.Label>
                    <Input.NumberInput size="s" placeholder="42" />
                </Input>
                <Button type="submit" variant="secondary">
                    Submit
                </Button>
            </Form>
        </AppWrapper>
    </ThemeProvider>
);

export default new Hono().get("/", (c) => c.html(ReactDOMServer.renderToString(form)));
