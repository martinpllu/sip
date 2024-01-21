import { AppWrapper, Button, Form, Heading, HeroBox, Input, TaggedIllustration, Text, ThemeProvider } from "@wealthwizards/design-system";
import { Hono } from "hono";
import React from "react";
import Page from "../components/page.component";
import { Interpolation, Theme, css } from "@emotion/react";
import { renderToString } from "../util/render";

const app = new Hono();
export default app;

app.get("/", async (c) => {
    return c.html(page({}));
});

app.post("/", async (c) => {
    const body = await c.req.parseBody();
    if (!body.age) {
        return c.html(page({ missingAgeError: true }));
    } else {
        // save to database here...
        return c.redirect("your-details");
    }
});

interface State {
    missingAgeError?: boolean;
}

function page(state: State) {
    return renderToString(
        <ThemeProvider tenant="turo">
            <Page>
                <AppWrapper>
                    <Page>
                        <HeroBox>
                            <HeroBox.Main>
                                <Heading type="h1" size="xl" color={"primaryBrand"} css={headingCss}>
                                    Find out your retirement income in 5 minutes
                                </Heading>
                                <Text size={"xl"} color={"primaryBrand"}>
                                    Answer a few easy questions and find out your retirement income options
                                </Text>
                                <Form action="/" method="post" hx-post="/" hx-target="#main" hx-swap="innerHTML" hx-push-url="true">
                                    <Form.InputSet>
                                        <div style={{ display: "flex" }}>
                                            <Input>
                                                <Input.Label>Start by telling us your age&nbsp;</Input.Label>
                                                <Input.Select name="age">
                                                    {range(40, 80).map((i) => (
                                                        <option value={i} key={"age-" + i}>
                                                            {i}
                                                        </option>
                                                    ))}
                                                </Input.Select>
                                                {state.missingAgeError && <Input.Error>Please select your age</Input.Error>}
                                            </Input>
                                        </div>
                                        <Input>
                                            <Input.LabelSpacer />
                                            <Button type={"submit"}>Next</Button>
                                        </Input>
                                    </Form.InputSet>
                                </Form>
                            </HeroBox.Main>
                            <HeroBox.Aside>
                                <TaggedIllustration illustration="PiggyBank">
                                    <TaggedIllustration.Tag $offset={5}>"When can I retire?"</TaggedIllustration.Tag>
                                    <TaggedIllustration.Tag $offset={45}>"Should I work part-time?"</TaggedIllustration.Tag>
                                    <TaggedIllustration.Tag>"Holiday or a new car?"</TaggedIllustration.Tag>
                                </TaggedIllustration>
                            </HeroBox.Aside>
                        </HeroBox>
                    </Page>
                </AppWrapper>
            </Page>
        </ThemeProvider>
    );
}

function range(start: number, end: number) {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

const headingCss: Interpolation<Theme> = ({ spacing }) => css`
    margin-top: ${spacing.s24};
`;
