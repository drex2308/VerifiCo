declare function _exports({ ipld, gcLock, preload }: {
    ipld: import('ipld');
    preload: import('../../../types').Preload;
    gcLock: import('.').GCLock;
}): (multihash: import("cids"), data: Uint8Array, options?: any) => Promise<import("cids")>;
export = _exports;
//# sourceMappingURL=append-data.d.ts.map