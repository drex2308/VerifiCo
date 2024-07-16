declare function _exports({ gcLock, pin, refs, repo }: {
    gcLock: import('../gc-lock').GCLock;
    pin: PinAPI;
    refs: RefsAPI["refs"];
    repo: IPFSRepo;
}): (_options?: any) => AsyncIterable<import("ipfs-core-types/src/repo").GCResult>;
export = _exports;
export type PinAPI = import('ipfs-core-types/src/pin').API;
export type RefsAPI = import('ipfs-core-types/src/refs').API;
export type IPFSRepo = import('ipfs-repo');
export type Key = import('interface-datastore').Key;
export type Block = import('ipld-block');
//# sourceMappingURL=gc.d.ts.map