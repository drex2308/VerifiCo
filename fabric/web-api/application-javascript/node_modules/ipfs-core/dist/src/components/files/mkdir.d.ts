declare function _exports(context: MfsContext): (path: string, options?: any) => Promise<void>;
export = _exports;
export type DAGNode = import('ipld-dag-pb').DAGNode;
export type DAGLink = import('ipld-dag-pb').DAGLink;
export type HashName = import('multihashes').HashName;
export type CID = import('cids');
export type CIDVersion = import('cids').CIDVersion;
export type MtimeLike = import('ipfs-unixfs').MtimeLike;
export type MfsContext = import('./').MfsContext;
export type DefaultOptions = {
    parents: boolean;
    hashAlg: HashName;
    cidVersion: CIDVersion;
    shardSplitThreshold: number;
    flush: boolean;
    mode?: number | undefined;
    mtime?: import("ipfs-unixfs/dist/src/types").MtimeLike | undefined;
    signal?: AbortSignal | undefined;
    timeout?: number | undefined;
};
//# sourceMappingURL=mkdir.d.ts.map