declare function _exports({ blockService, gcLock, pinManager }: {
    blockService: import('ipfs-block-service');
    pinManager: import('../pin/pin-manager');
    gcLock: import('.').GCLock;
}): (cids: CID | CID[], options?: any) => AsyncIterable<import("ipfs-core-types/src/block").RmResult>;
export = _exports;
import CID = require("cids");
//# sourceMappingURL=rm.d.ts.map