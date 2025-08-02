import { JSX } from "react";
import { BlockBoxNode } from "../system/nodes/BlockBoxNode";
/**
 * @class ReactNode
 * @description React 를 기반으로 하는 노드의 최상위 클래스
 */
export declare class ReactNode extends BlockBoxNode {
    decorate(): JSX.Element;
}
