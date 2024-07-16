declare function _exports({ block, gcLock, preload, pin, options }: Context): (source: import("ipfs-core-types/src/utils").ImportCandidateStream, options?: any) => AsyncIterable<import("ipfs-core-types/src/root").AddResult>;
export = _exports;
export type CID = import('cids');
export type ImportResult = import('ipfs-unixfs-importer').ImportResult;
export type Context = {
    block: import('ipfs-core-types/src/block').API;
    gcLock: import('../gc-lock').GCLock;
    preload: import('../../types').Preload;
    pin: import('ipfs-core-types/src/pin').API;
    options?: import("ipfs-core-types/src/root").ShardingOptions | undefined;
};
//# sourceMappingURL=index.d.ts.map