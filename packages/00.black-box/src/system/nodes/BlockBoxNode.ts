/**
 * @class BlockBoxNode
 * @description 모든 노드의 최상위 클래스
 */
export class BlockBoxNode {
    __ENV: 'development' | 'production' = 'development';
    
    create(): string | HTMLElement | DocumentFragment {
        throw new Error('Not implemented');
    }

    update(): string | HTMLElement | DocumentFragment {
        throw new Error('Not implemented');
    }
}