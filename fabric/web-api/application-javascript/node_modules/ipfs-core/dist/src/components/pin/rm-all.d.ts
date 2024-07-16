declare function _exports({ pinManager, gcLock, ipld }: {
    pinManager: import('./pin-manager');
    gcLock: import('.').GCLock;
    ipld: import('ipld');
}): (source: import("ipfs-core-types/src/utils").AwaitIterable<import("ipfs-core-types/src/pin").RmAllInput>, _options?: any) => AsyncIterable<import("cids")>;
export = _exports;
//# sourceMappingURL=rm-all.d.ts.map