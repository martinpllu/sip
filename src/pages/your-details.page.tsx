import { Chip, ChipGroup, Form, Heading } from "@wealthwizards/design-system";
import { Hono } from "hono";
import React from "react";
import { renderToString } from "../util/render";
import AppPage from "./app.page";

const app = new Hono();
export default app;

app.get("/", (c) => {
    const errors = c.req.query("errors")?.split(",") || [];
    return c.html(
        renderToString(
            <AppPage>
                <Heading type="h1" size="l" id="page-heading">
                    What's brought you here today?
                </Heading>
                <Form.FormItem>
                    <ChipGroup value="hi" onChange={() => {}}>
                        <ChipGroup.Legend>Select the one that matters to you most:</ChipGroup.Legend>
                        <ChipGroup.Chip value="v1" key="k1">
                            <Chip.Label illustration={"Calendar"}>Find out if I can afford to retire early</Chip.Label>
                        </ChipGroup.Chip>
                        <ChipGroup.Chip value="v2" key="k2">
                            <Chip.Label illustration={"DocumentsQuestion"}>Understand my retirement income</Chip.Label>
                        </ChipGroup.Chip>
                        <ChipGroup.Chip value="v3" key="k3">
                            <Chip.Label illustration={"BalanceScales"}>I'm not sure where to start</Chip.Label>
                        </ChipGroup.Chip>
                        <ChipGroup.Chip value="v4" key="k4">
                            <Chip.Label illustration={"SavingIncrease"}>I'm retired and want some help with my plans</Chip.Label>
                        </ChipGroup.Chip>
                        {/* {isError && <ChipGroup.Error>{validationError}</ChipGroup.Error>} */}
                    </ChipGroup>
                </Form.FormItem>
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
