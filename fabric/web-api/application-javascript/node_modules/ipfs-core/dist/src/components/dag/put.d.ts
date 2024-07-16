declare function _exports({ ipld, pin, gcLock, preload }: {
    ipld: import('ipld');
    pin: import('ipfs-core-types/src/pin').API;
    preload: import('../../types').Preload;
    gcLock: import('.').GCLock;
}): (dagNode: any, options?: any) => Promise<import("cids")>;
export = _exports;
export type CID = import('cids');
export type CIDVersion = import('cids').CIDVersion;
export type CodecCode = import('multicodec').CodecCode;
export type CodecName = import('multicodec').CodecName;
export type HashCode = import('multihashes').HashCode;
export type HashName = import('multihashes').HashName;
//# sourceMappingURL=put.d.ts.map