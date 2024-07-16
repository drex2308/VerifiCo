declare function _exports({ ipld, gcLock, preload }: {
    ipld: import('ipld');
    preload: import('../../../types').Preload;
    gcLock: import('.').GCLock;
}): (multihash: import("cids"), data: Uint8Array, options?: any) => Promise<import("cids")>;
export = _exports;
//# sourceMappingURL=set-data.d.ts.map