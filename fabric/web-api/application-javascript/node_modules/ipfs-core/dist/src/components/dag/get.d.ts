declare function _exports({ ipld, preload }: {
    ipld: import('ipld');
    preload: import('../../types').Preload;
}): (cid: import("cids"), options?: any) => Promise<import("ipfs-core-types/src/dag").GetResult>;
export = _exports;
//# sourceMappingURL=get.d.ts.map