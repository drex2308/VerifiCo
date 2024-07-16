declare function _exports(context: MfsContext): (path: string, mode: string | number, options?: any) => Promise<void>;
export = _exports;
export type HashName = import('multihashes').HashName;
export type CIDVersion = import('cids').CIDVersion;
export type MfsContext = import('./').MfsContext;
export type DefaultOptions = {
    flush: boolean;
    hashAlg: HashName;
    cidVersion: CIDVersion;
    shardSplitThreshold: number;
    recursive: boolean;
    signal?: AbortSignal | undefined;
    timeout?: number | undefined;
};
//# sourceMappingURL=chmod.d.ts.map