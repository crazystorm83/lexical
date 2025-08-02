export interface IRegistry {
    add(event: string, listener: Function): () => void;
    remove(event: string, listener?: Function): void;
    sort(event: string, sort: (a: Function, b: Function) => number): void;
    emit(event: string, ...args: any[]): void;
    emitAsync(event: string, ...args: any[]): Promise<void>;
}
/**
 * @class Registry
 * @description 이벤트 등록 클래스
 */
export declare class Registry implements IRegistry {
    private __listeners;
    /**
     *
     * @param event
     * @param listener
     * @returns
     */
    add(event: string, listener: Function): () => void;
    remove(event: string, listener?: Function): void;
    sort(event: string, sort: (a: Function, b: Function) => number): void;
    emit(event: string, ...args: any[]): void;
    emitAsync(event: string, ...args: any[]): Promise<void>;
}
