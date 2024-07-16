declare function _exports({ ipld, gcLock, preload }: {
    ipld: import('ipld');
    preload: import('../../../types').Preload;
    gcLock: import('.').GCLock;
}): (multihash: import("cids"), linkRef: string | import("ipld-dag-pb/src/dag-link/dagLink"), options?: any) => Promise<import("cids")>;
export = _exports;
//# sourceMappingURL=rm-link.d.ts.map