export = PinAPI;
/**
 * @typedef {import('../gc-lock').GCLock} GCLock
 * @typedef {import('./pin-manager')} PinManager
 */
declare class PinAPI {
    /**
     * @param {Object} config
     * @param {GCLock} config.gcLock
     * @param {import('ipld')} config.ipld
     * @param {PinManager} config.pinManager
     */
    constructor({ gcLock, ipld, pinManager }: {
        gcLock: GCLock;
        ipld: import('ipld');
        pinManager: PinManager;
    });
    addAll: (source: import("ipfs-core-types/src/utils").AwaitIterable<import("ipfs-core-types/src/pin").AddInput>, options?: any) => AsyncIterable<import("cids")>;
    add: (path: string | import("cids"), options?: any) => Promise<import("cids")>;
    rmAll: (source: import("ipfs-core-types/src/utils").AwaitIterable<import("ipfs-core-types/src/pin").RmAllInput>, _options?: any) => AsyncIterable<import("cids")>;
    rm: (path: string | import("cids"), options?: any) => Promise<import("cids")>;
    ls: (options?: any) => AsyncIterable<import("ipfs-core-types/src/pin").LsResult>;
    /** @type {import('ipfs-core-types/src/pin/remote').API} */
    remote: import('ipfs-core-types/src/pin/remote').API;
}
declare namespace PinAPI {
    export { GCLock, PinManager };
}
type GCLock = import('../gc-lock').GCLock;
type PinManager = import('./pin-manager');
//# sourceMappingURL=index.d.ts.map