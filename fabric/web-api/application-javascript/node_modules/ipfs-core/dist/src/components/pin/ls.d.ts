declare function _exports({ pinManager, ipld }: {
    pinManager: import('./pin-manager');
    ipld: import('ipld');
}): (options?: any) => AsyncIterable<import("ipfs-core-types/src/pin").LsResult>;
export = _exports;
export type CID = import('cids');
//# sourceMappingURL=ls.d.ts.map