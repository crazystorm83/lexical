import { ReactNode } from "@black-box";
import { ReactDecimalAtom } from "@nh-react";
import type { JSX } from "react";

export class ListItemNode extends ReactNode {
    decorate(): JSX.Element {
        return <ReactDecimalAtom />
    }
} 