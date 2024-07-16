declare function _exports({ ipld, preload }: {
    ipld: import('ipld');
    preload: import('../../types').Preload;
}): (multihash: import("cids"), options?: any) => Promise<import("ipfs-core-types/src/object").StatResult>;
export = _exports;
//# sourceMappingURL=stat.d.ts.map