import { Button, Form, Heading, HeroBox, Input, TaggedIllustration, Text } from "@wealthwizards/design-system";
import { Hono } from "hono";
import React from "react";
import AppPage from "./app.page";
import { Interpolation, Theme, css } from "@emotion/react";
import { renderToString } from "../util/render";

const app = new Hono();
export default app;

app.get("/", async (c) => {
    const errors = c.req.query("errors")?.split(",") || [];
    return c.html(
        renderToString(
            <AppPage>
                <HeroBox>
                    <HeroBox.Main>
                        <Heading type="h1" size="xl" color={"primaryBrand"} css={headingCss}>
                            Find out your retirement income in 5 minutes!!!!
                        </Heading>
                        <Text size={"xl"} color={"primaryBrand"}>
                            Answer a few easy questions and find out your retirement income options
                        </Text>
                        <Form action="/" method="post">
                            <Form.InputSet>
                                <div style={{ display: "flex" }}>
                                    <Input>
                                        <Input.Label>Start by telling us your age&nbsp;</Input.Label>
                                        <Input.Select name="age">
                                            {[45, 50, 60].map((i) => (
                                                <option value={i} key={"age-" + i}>
                                                    {i}
                                                </option>
                                            ))}
                                        </Input.Select>
                                        {errors.includes("age") && <Input.Error>Please select your age</Input.Error>}
                                    </Input>
                                </div>
                                <Input>
                                    <Input.LabelSpacer />
                                    <Button type={"submit"}>Next</Button>
                                </Input>
                            </Form.InputSet>
                        </Form>
                        {/* <AgeInputForm onSubmit={(data) => onNext(data)} age={formData.age} /> */}
                    </HeroBox.Main>
                    <HeroBox.Aside>
                        <TaggedIllustration illustration="PiggyBank">
                            <TaggedIllustration.Tag $offset={5}>"When can I retire?"</TaggedIllustration.Tag>
                            <TaggedIllustration.Tag $offset={45}>"Should I work part-time?"</TaggedIllustration.Tag>
                            <TaggedIllustration.Tag>"Holiday or a new car?"</TaggedIllustration.Tag>
                        </TaggedIllustration>
                    </HeroBox.Aside>
                </HeroBox>
            </AppPage>
        )
    );
});

app.post("/", async (c) => {
    const body = await c.req.parseBody();
    if (!body.age) {
        return c.redirect("?errors=age");
    } else {
        return c.redirect("your-details");
    }
    // await db.insert(users).values({
    //     fullName: body.name,
    //     phone: body.age,
    // });
    // console.log("Inserted", body);
    // return c.html("");
});

const headingCss: Interpolation<Theme> = ({ spacing }) => css`
    margin-top: ${spacing.s24};
`;
