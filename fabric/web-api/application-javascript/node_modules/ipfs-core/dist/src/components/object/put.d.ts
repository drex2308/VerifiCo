declare function _exports({ ipld, gcLock, preload }: {
    ipld: import('ipld');
    preload: import('../../types').Preload;
    gcLock: import('.').GCLock;
}): (obj: Uint8Array | import("ipld-dag-pb/src/dag-node/dagNode") | import("ipld-dag-pb/src/types").DAGNodeLike, options?: any) => Promise<import("cids")>;
export = _exports;
//# sourceMappingURL=put.d.ts.map