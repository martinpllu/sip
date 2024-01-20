import "@emotion/react";

declare module "@emotion/react" {
    export interface Theme {}
}

declare module "react" {
    interface Attributes {
        css?: Interpolation<Theme>;
    }
}
