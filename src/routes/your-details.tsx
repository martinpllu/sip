import { Button, Form, Heading, Input } from "@wealthwizards/design-system";
import { Hono } from "hono";
import React from "react";
import { db } from "../db/db";
import { users } from "../db/schema";
import { wrap } from "../util/react-util";

const app = new Hono();
export default app;

app.get(
    "/",
    wrap(
        <>
            <Heading size="s" type="h3">
                Personal Details
            </Heading>
            <Form hx-post="form">
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
        </>
    )
);

app.post("/", async (c) => {
    const body = await c.req.parseBody();
    await db.insert(users).values({
        fullName: body.name,
        phone: body.age,
    });
    console.log("Inserted", body);
    return c.html("");
});
