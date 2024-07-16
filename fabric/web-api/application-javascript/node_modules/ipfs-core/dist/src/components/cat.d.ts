declare function _exports({ ipld, preload }: Context): (ipfsPath: import("ipfs-core-types/src/utils").IPFSPath, options?: any) => AsyncIterable<Uint8Array>;
export = _exports;
export type Context = {
    ipld: import('ipld');
    preload: import('../types').Preload;
};
//# sourceMappingURL=cat.d.ts.map