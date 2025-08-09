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
export class Registry implements IRegistry {
    private __listeners: Record<string, Function[]> = {};

    /**
     *
     * @param event
     * @param listener
     * @returns
     */
    public add(event: string, listener: Function): () => void {
        if (!this.__listeners[event]) {
            this.__listeners[event] = [];
        }
        this.__listeners[event].push(listener);

        return () => {
            this.remove(event, listener);
        };
    }

    public remove(event: string, listener?: Function): void {
        if (listener) {
            this.__listeners[event] = this.__listeners[event].filter((x) => x !== listener);
        } else {
            delete this.__listeners[event];
        }
    }

    public has(event: string): boolean {
        return this.__listeners[event] !== undefined;
    }

    public get(event: string): Function[] {
        return this.__listeners[event] || [];
    }

    public once(event: string, listener: Function): void {
        if (this.has(event)) {
            return;
        }
        this.add(event, listener);
    }

    public sort(event: string, sort: (a: Function, b: Function) => number): void {
        if (!this.__listeners[event]) {
            return;
        }
        this.__listeners[event].sort(sort);
    }

    public emit(event: string, ...args: any[]): void {
        if (!this.__listeners[event]) {
            return;
        }
        this.__listeners[event].forEach((listener) => listener(...args));
    }

    public async emitAsync(event: string, ...args: any[]): Promise<void> {
        if (!this.__listeners[event]) {
            return;
        }
        for (const listener of this.__listeners[event]) {
            await listener(...args);
        }
    }
}
