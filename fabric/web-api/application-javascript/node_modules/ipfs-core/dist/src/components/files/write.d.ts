declare function _exports(context: MfsContext): (path: string, content: string | Uint8Array | AsyncIterable<Uint8Array> | Blob | Iterable<Uint8Array>, opts?: any) => Promise<void>;
export = _exports;
export type HashName = import('multihashes').HashName;
export type CIDVersion = import('cids').CIDVersion;
export type MtimeLike = import('ipfs-unixfs').MtimeLike;
export type MfsContext = import('./').MfsContext;
export type FilePath = import('./utils/to-mfs-path').FilePath;
export type MfsPath = import('./utils/to-mfs-path').MfsPath;
export type DefaultOptions = {
    offset: number;
    length: number;
    create: boolean;
    truncate: boolean;
    rawLeaves: boolean;
    reduceSingleLeafToSelf: boolean;
    cidVersion: CIDVersion;
    hashAlg: HashName;
    parents: boolean;
    progress: import('ipfs-core-types/src/root').AddProgressFn;
    strategy: 'trickle' | 'balanced';
    flush: boolean;
    leafType: 'raw' | 'file';
    shardSplitThreshold: number;
    mtime?: import("ipfs-unixfs/dist/src/types").MtimeLike | undefined;
    mode?: number | undefined;
    signal?: AbortSignal | undefined;
    timeout?: number | undefined;
};
//# sourceMappingURL=write.d.ts.map