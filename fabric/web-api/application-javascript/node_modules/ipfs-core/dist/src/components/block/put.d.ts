declare function _exports({ blockService, pin, gcLock, preload }: {
    blockService: import('ipfs-block-service');
    pin: import('ipfs-core-types/src/pin').API;
    gcLock: import('.').GCLock;
    preload: import('../../types').Preload;
}): (block: Uint8Array | Block, options?: any) => Promise<Block>;
export = _exports;
export type CIDVersion = import('cids').CIDVersion;
import Block = require("ipld-block");
//# sourceMappingURL=put.d.ts.map