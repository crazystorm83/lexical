/**
 * @class BlockBoxNode
 * @description 모든 노드의 최상위 클래스
 */
export declare class BlockBoxNode {
    __ENV: 'development' | 'production';
    create(): string | HTMLElement | DocumentFragment;
    update(): string | HTMLElement | DocumentFragment;
}
