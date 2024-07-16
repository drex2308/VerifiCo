declare function _exports({ ipld, preload }: {
    ipld: import('ipld');
    preload: import('../../types').Preload;
}): (ipfsPath: import("ipfs-core-types/src/utils").IPFSPath, options?: any) => Promise<import("ipfs-core-types/src/dag").ResolveResult>;
export = _exports;
//# sourceMappingURL=resolve.d.ts.map