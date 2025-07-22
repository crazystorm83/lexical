export class LexicalNode {
    __ENV: 'development' | 'production' = 'development';
    
    create(): string | HTMLElement | DocumentFragment {
        throw new Error('Not implemented');
    }

    update(): string | HTMLElement | DocumentFragment {
        throw new Error('Not implemented');
    }
}