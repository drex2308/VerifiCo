declare function _exports(context: MfsContext): (path: string, options?: any) => Promise<void>;
export = _exports;
export type HashName = import('multihashes').HashName;
export type CIDVersion = import('cids').CIDVersion;
export type MtimeLike = import('ipfs-unixfs').MtimeLike;
export type MfsContext = import('./').MfsContext;
export type DefaultOptions = {
    flush: boolean;
    shardSplitThreshold: number;
    cidVersion: CIDVersion;
    hashAlg: HashName;
    mtime?: import("ipfs-unixfs/dist/src/types").MtimeLike | undefined;
    signal?: AbortSignal | undefined;
    timeout?: number | undefined;
};
//# sourceMappingURL=touch.d.ts.map