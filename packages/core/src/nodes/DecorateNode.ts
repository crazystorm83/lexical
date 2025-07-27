import { JSX } from "react";
import { LexicalNode } from "./LexicalNode";

export class DecorateNode extends LexicalNode {
    decorate(): JSX.Element {
        throw new Error('Not implemented');
    }
}