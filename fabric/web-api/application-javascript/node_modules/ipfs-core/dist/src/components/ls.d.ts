declare function _exports({ ipld, preload }: Context): (ipfsPath: import("ipfs-core-types/src/utils").IPFSPath, options?: any) => AsyncIterable<import("ipfs-core-types/src/root").IPFSEntry>;
export = _exports;
export type Context = {
    ipld: import('ipld');
    preload: import('../types').Preload;
};
//# sourceMappingURL=ls.d.ts.map