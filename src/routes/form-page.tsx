import { Button, Form, Heading, Input } from "@wealthwizards/design-system";
import { Hono } from "hono";
import React from "react";
import { wrap } from "../util/react-util";
import { db } from "../db/db";
import { users } from "../db/schema";

const form = (
    <Form hx-post="form">
        <Heading size="s" type="h3">
            Personal Details
        </Heading>
        <Input>
            <Input.Label>What is your name?</Input.Label>
            <Input.TextInput size="s" placeholder="Your name" name="name" />
            <Input.HelperLabel>Optional helper copy.</Input.HelperLabel>
        </Input>
        <Input>
            <Input.Label>How old are you?</Input.Label>
            <Input.NumberInput size="s" placeholder="Your age" name="age" />
        </Input>
        <Button type="submit" variant="secondary">
            Submit
        </Button>
    </Form>
);
export default new Hono()
    .get("/", wrap(form)) //
    .post("/", async (c) => {
        const body = await c.req.parseBody();
        await db.insert(users).values({
            fullName: body.name,
            phone: body.age,
        });
        console.log("Inserted", body);
        return c.html("");
    });
