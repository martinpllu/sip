import { AppWrapper, Chip, ChipGroup, Form, Heading, ThemeProvider } from "@wealthwizards/design-system";
import { Hono } from "hono";
import React from "react";
import { renderToString } from "../util/render";

const app = new Hono();
export default app;

app.get("/", (c) => {
    return c.html(
        renderToString(
            <ThemeProvider tenant="turo">
                <AppWrapper>
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
                </AppWrapper>
            </ThemeProvider>
        )
    );
});

app.post("/", async (c) => {
    // ...
});
