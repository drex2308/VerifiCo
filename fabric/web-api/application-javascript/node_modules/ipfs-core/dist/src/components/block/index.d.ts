export = BlockAPI;
/**
 * @typedef {import('../../types').Preload} Preload
 * @typedef {import('ipfs-block-service')} BlockService
 * @typedef {import('../gc-lock').GCLock} GCLock
 * @typedef {import('ipfs-core-types/src/pin').API} Pin
 * @typedef {import('../pin/pin-manager')} PinManager
 */
declare class BlockAPI {
    /**
     * @param {Object} config
     * @param {Preload} config.preload
     * @param {BlockService} config.blockService
     * @param {GCLock} config.gcLock
     * @param {Pin} config.pin
     * @param {PinManager} config.pinManager
     */
    constructor({ blockService, preload, gcLock, pinManager, pin }: {
        preload: Preload;
        blockService: BlockService;
        gcLock: GCLock;
        pin: Pin;
        pinManager: PinManager;
    });
    get: (cid: string | Uint8Array | import("cids"), options?: any) => Promise<import("ipld-block")>;
    put: (block: Uint8Array | import("ipld-block"), options?: any) => Promise<import("ipld-block")>;
    rm: (cids: import("cids") | import("cids")[], options?: any) => AsyncIterable<import("ipfs-core-types/src/block").RmResult>;
    stat: (cid: import("ipfs-core-types/src/utils").IPFSPath, options?: any) => Promise<import("ipfs-core-types/src/block").StatResult>;
}
declare namespace BlockAPI {
    export { Preload, BlockService, GCLock, Pin, PinManager };
}
type Preload = import('../../types').Preload;
type BlockService = import('ipfs-block-service');
type GCLock = import('../gc-lock').GCLock;
type Pin = import('ipfs-core-types/src/pin').API;
type PinManager = import('../pin/pin-manager');
//# sourceMappingURL=index.d.ts.map