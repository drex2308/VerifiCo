declare function _exports(context: MfsContext): (paths: string | string[], opts?: any) => Promise<void>;
export = _exports;
export type HashName = import('multihashes').HashName;
export type CIDVersion = import('cids').CIDVersion;
export type MfsContext = import('./').MfsContext;
export type DefaultOptions = {
    recursive: boolean;
    cidVersion: CIDVersion;
    hashAlg: HashName;
    flush: boolean;
    shardSplitThreshold: number;
    signal?: AbortSignal | undefined;
    timeout?: number | undefined;
};
//# sourceMappingURL=rm.d.ts.map