import { Button, Form, Heading, Input } from "@wealthwizards/design-system";
import { Hono } from "hono";
import React from "react";
import ReactDOMServer from "react-dom/server";
import AppPage from "./app-page";

const app = new Hono();
export default app;

app.get("/", (c) => {
    const errors = c.req.query("errors")?.split(",") || [];
    return c.html(
        ReactDOMServer.renderToString(
            <AppPage>
                <Heading size="s" type="h3">
                    Personal Details
                </Heading>
                <Form action="/your-details" method="post">
                    <Input>
                        <Input.Label>What is your name?</Input.Label>
                        <Input.TextInput size="s" placeholder="Your name" name="name" />
                        {errors.includes("name") && <Input.HelperLabel>Please enter a name</Input.HelperLabel>}
                    </Input>
                    <Input>
                        <Input.Label>How old are you?</Input.Label>
                        <Input.NumberInput size="s" placeholder="Your age" name="age" />
                    </Input>
                    <Button type="submit" variant="secondary">
                        Submit
                    </Button>
                </Form>
            </AppPage>
        )
    );
});

app.post("/", async (c) => {
    const body = await c.req.parseBody();
    if (!body.name) {
        return c.redirect("your-details?errors=name");
    }
    // await db.insert(users).values({
    //     fullName: body.name,
    //     phone: body.age,
    // });
    // console.log("Inserted", body);
    // return c.html("");
});
