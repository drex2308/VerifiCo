declare function _exports(context: MfsContext): (from: import("ipfs-core-types/src/utils").IPFSPath | import("ipfs-core-types/src/utils").IPFSPath[], to: string, opts?: any) => Promise<void>;
export = _exports;
export type DAGNode = import('ipld-dag-pb').DAGNode;
export type HashName = import('multihashes').HashName;
export type CID = import('cids');
export type CIDVersion = import('cids').CIDVersion;
export type Mtime = import('ipfs-unixfs').Mtime;
export type MfsPath = import('./utils/to-mfs-path').MfsPath;
export type MfsTrail = import('./utils/to-trail').MfsTrail;
export type MfsContext = import('./').MfsContext;
export type DefaultOptions = {
    parents: boolean;
    flush: boolean;
    hashAlg: HashName;
    cidVersion: CIDVersion;
    shardSplitThreshold: number;
    signal?: AbortSignal | undefined;
    timeout?: number | undefined;
};
//# sourceMappingURL=cp.d.ts.map