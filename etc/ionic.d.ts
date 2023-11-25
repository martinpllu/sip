import { JSX as IonicJSX } from "@ionic/core";
import { JSX as IoniconsJSX } from "ionicons";

/**
 * Make type definitons for ionic/ionicons elements available to TSX
 */

type ToTSX<T> = {
    [P in keyof T]?: T[P] & {
        [elemName: string]: any;
    };
};

declare global {
    export namespace JSX {
        interface IntrinsicElements
            extends ToTSX<
                IonicJSX.IntrinsicElements & IoniconsJSX.IntrinsicElements
            > {}
    }
}
