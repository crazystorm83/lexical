/**
 * @class BlockBoxNode
 * @description 모든 노드의 최상위 클래스
 */
export abstract class BlockBoxNode {
    __ENV: 'development' | 'production' = 'development';

    create(): HTMLElement | DocumentFragment | undefined {
        throw new Error('Not implemented');
    }

    update(): HTMLElement | DocumentFragment | undefined {
        throw new Error('Not implemented');
    }
}
