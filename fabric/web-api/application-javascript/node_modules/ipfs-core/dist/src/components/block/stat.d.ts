declare function _exports({ blockService, preload }: {
    blockService: import('ipfs-block-service');
    preload: import('../../types').Preload;
}): (cid: import("ipfs-core-types/src/utils").IPFSPath, options?: any) => Promise<import("ipfs-core-types/src/block").StatResult>;
export = _exports;
//# sourceMappingURL=stat.d.ts.map