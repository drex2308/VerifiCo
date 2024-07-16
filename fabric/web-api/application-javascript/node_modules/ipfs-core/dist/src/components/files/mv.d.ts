declare function _exports(context: MfsContext): (from: string | string[], to: string, options?: any) => Promise<void>;
export = _exports;
export type HashName = import('multihashes').HashName;
export type CIDVersion = import('cids').CIDVersion;
export type MfsContext = import('./').MfsContext;
export type DefaultOptions = {
    parents: boolean;
    flush: boolean;
    cidVersion: CIDVersion;
    hashAlg: HashName;
    shardSplitThreshold: number;
    signal?: AbortSignal | undefined;
    timeout?: number | undefined;
};
//# sourceMappingURL=mv.d.ts.map