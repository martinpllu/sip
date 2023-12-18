import { Button, Form, Heading, Input } from "@wealthwizards/design-system";
import { Hono } from "hono";
import React from "react";
import { wrap } from "../util/react-util";

const form = (
    <Form action="/foo/bar">
        <Heading size="s" type="h3">
            Personal Details
        </Heading>
        <Input>
            <Input.Label>What is your name?</Input.Label>
            <Input.TextInput size="s" placeholder="Your name" />
            <Input.HelperLabel>Optional helper copy.</Input.HelperLabel>
        </Input>
        <Input>
            <Input.Label>How old are you?</Input.Label>
            <Input.NumberInput size="s" placeholder="Your age" />
        </Input>
        <Button type="submit" variant="secondary">
            Submit
        </Button>
    </Form>
);
export default new Hono().get("/", wrap(form));
