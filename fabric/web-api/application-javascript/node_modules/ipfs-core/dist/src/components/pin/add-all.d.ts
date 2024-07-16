declare function _exports({ pinManager, gcLock, ipld }: {
    gcLock: import('../gc-lock').GCLock;
    ipld: import('ipld');
    pinManager: import('./pin-manager');
}): (source: import("ipfs-core-types/src/utils").AwaitIterable<import("ipfs-core-types/src/pin").AddInput>, options?: any) => AsyncIterable<import("cids")>;
export = _exports;
export type Source = import('ipfs-core-utils/src/pins/normalise-input').Source;
export type PinTarget = import('ipfs-core-utils/src/pins/normalise-input').Pin;
export type AbortOptions = import('ipfs-core-types/src/utils').AbortOptions;
export type CID = import('cids');
export type AwaitIterable<T> = Iterable<T> | AsyncIterable<T>;
//# sourceMappingURL=add-all.d.ts.map