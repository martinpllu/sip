import { Button, Form, Heading, HeroBox, Input, TaggedIllustration, Text } from "@wealthwizards/design-system";
import { Hono } from "hono";
import React from "react";
import ReactDOMServer from "react-dom/server";
import AppPage from "./app-page";

export default new Hono().get("/", (c) =>
    c.html(
        ReactDOMServer.renderToString(
            <AppPage>
                <HeroBox>
                    <HeroBox.Main>
                        <Heading type="h1" size="xl" color={"primaryBrand"}>
                            Find out your retirement income in 5 minutes
                        </Heading>
                        <Text size={"xl"} color={"primaryBrand"}>
                            Answer a few easy questions and find out your retirement income options
                        </Text>
                        <Form>
                            <Form.InputSet>
                                <Input>
                                    <Input.Label>Start by telling us your age&nbsp;</Input.Label>
                                    <Input.Select>
                                        {[45, 50, 60].map((i) => (
                                            <option value={i} key={"age-" + i}>
                                                {i}
                                            </option>
                                        ))}
                                    </Input.Select>
                                    {/* {errors.age?.message && <Input.Error>{errors.age?.message}</Input.Error>} */}
                                </Input>
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
    )
);
